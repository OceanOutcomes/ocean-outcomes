module Jekyll
  class Post
    alias_method :_next, :next
    def next
      pos = site.posts.index {|post| post.equal?(self) }
      # Ensure post is not last one in site.posts
      if pos < site.posts.length - 1
        post_tags = site.posts[pos].tags
        while pos < site.posts.length - 1
          # Increment index position to get posts greater than current post
          pos += 1
          # Check if post at new index position shares a tag with the current post
          # NOTE: tags cannot be used other than to tag language or this will fail
          intersect = site.posts[pos].tags & post_tags
          if intersect.any?
            return site.posts[pos]
          end
        end
      else
        nil
      end
    end

    alias_method :_previous, :previous
    def previous
      pos = site.posts.index {|post| post.equal?(self) }
      # Ensure post is not first one in site.posts
      if pos > 0
        post_tags = site.posts[pos].tags
        # Loop through posts from current position backward to find previous post in same language
        while pos > 0
          # Decrement index position to get posts older than current post
          pos -= 1
          # Check if post at new index position shares a tag with the current post
          # NOTE: tags cannot be used other than to tag language or this will fail 
          intersect = site.posts[pos].tags & post_tags
          if intersect.any?
            return site.posts[pos]
          end
        end
      else
        nil
      end

    end
  end
end