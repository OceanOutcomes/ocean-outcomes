# Getting started
To get up and running:

Install dependencies

```shell
$ bundle install
```

Run the local server
```shell
$ rake serve
```
# Important site notes
1. The [post-prev-next-by-tag.rb](/_plugins/post-prev-next-by-tag.rb) requires that the only tag present on any post is the "language" one put there by the i18n plugin. This means **tags should NOT be used in the frontmatter of any posts on the site**.