require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'tmpdir'
require 'jekyll'

task :default => :server

desc 'Build site with Jekyll'
task :build do
  system 'bundle exec sass -r sass-globbing --update assets/sass:assets/css'
  jekyll 'build'
end

desc 'Build and start local server'
task :jekyllserve do
  jekyll 'serve -w --baseurl=""'
end

desc 'Watch sass'
task :sasswatch do
  system 'bundle exec sass -r sass-globbing --watch assets/sass:assets/css'
end

def jekyll(opts = '')
  system 'rm -rf _site'
  system 'bundle exec jekyll ' + opts
end

# Amazon S3 publishing options
desc "Generate and publish site to www.oceanoutcomes.org on Amazon S3."
task :publish => [:build] do
  system 'bundle exec s3_website push'
end

desc "Generate and publish site to stage.oceanoutcomes.org on Amazon S3."
task :stage => [:build] do
  system 'bundle exec s3_website push --config-dir=_stage_config'
end

# Run development tasks on separate threads
task :serve do
  threads = []
  %w{sasswatch jekyllserve}.each do |task|
    threads << Thread.new(task) do |devtask|
      Rake::Task[devtask].invoke
    end
  end
  threads.each {|thread| thread.join}
end
