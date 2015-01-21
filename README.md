# Content Management
##Content staging URLs
* [Staging site](http://stage.oceanoutcomes.org.s3-website-us-east-1.amazonaws.com/)
* [Live site](http://www.oceanoutcomes.org.s3-website-us-east-1.amazonaws.com/)

##Content Type and field map
[O2 Content Types.pdf](/O2 Content Types.pdf) maps out all Content Types that are available and which fields exist for each. Use this as a reference when creating new or editing existing content.

##Markdown documentation
1. [Github's guide to mastering markdown](https://guides.github.com/features/mastering-markdown/) - start here as it's the best quick reference I've found
2. [Official documentation from those who created Markdown](http://daringfireball.net/projects/markdown/syntax) - more thorough than the above, but less user-friendly.

##Amazon AWS
There are three important Amazon AWS buckets that can be accessed by logging into the [Amazon S3 console](https://console.aws.amazon.com/s3/home?region=us-west-2) and clicking the S3 icon in the top toolbar:
```
Live site => www.oceanoutcomes.org
Staging site => stage.oceanoutcomes.org
Static Assets => staticassets.oceanoutcomes.org
```
###Live and Staging buckets - use Github to make changes
The Live and Staging buckets should not be modified as they are automatically updated when you make changes to content in the [Ocean Outcomes Gitrub repository](https://github.com/thinkshout/ocean-outcomes)(where you're at now :wink:). Also these buckets map to branches in the Github repo:

```
staging site => master branch
live site => live branch
```

This means updating content in the  ```master``` branch will cause updates to the Staging site and updates in the ```live``` branch will cause updates to the Live site. You can change which Github branch you're using via a dropdown in the upper left of most Github pages.

###Static Assets bucket

The "Static Assets" bucket is for things like images & videos that are used on the site and need to persist each time the site is rebuilt, which happens anytime content is updated.

You can use the Amazon S3 management console to create new folders, upload files, etc. in the Static Assets bucket. Then, you can use the URL for any asset, in the content you edit on the site.

**Example**:
```images/200x200.gif``` is publicly available at this URL: https://s3-us-west-2.amazonaws.com/staticassets.oceanoutcomes.org/images/200x200.gif
...and you can use this URL directly for a field in the content header or in the content body...
```
---
title: Some Text Post
banner-image-field: https://s3-us-west-2.amazonaws.com/staticassets.oceanoutcomes.org/images/200x200.gif
---
This is some sample body content. It might be the body
of a news article. And now and image after this paragraph.
![alt-text](https://s3-us-west-2.amazonaws.com/staticassets.oceanoutcomes.org/images/200x200.gif)
```

# Getting started for Development
To get up and running:

Install dependencies

```shell
$ bundle install
```

Run the local server
```shell
$ rake serve
```
