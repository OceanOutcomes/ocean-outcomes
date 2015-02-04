class Video < Liquid::Tag
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/
  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @id = $1
      @width = 560
      @height = 420
    else
      raise "No YouTube ID provided in the tag"
    end
  end

  def render(context)
    "<iframe sevice=\"#{@service}\" frameborder=\"0\" width=\"#{@width}\" height=\"#{@height}\" src=\"http://www.youtube.com/embed/#{@id}?color=white&theme=light\"></iframe>"
  end

   Liquid::Template.register_tag "video", self
end
