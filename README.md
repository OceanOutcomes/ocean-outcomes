[![Build Status](https://travis-ci.org/thinkshout/ocean-outcomes.svg)](https://travis-ci.org/thinkshout/ocean-outcomes)

A site built using Jekyll.

# Content Management
## Content staging URLs
* [Staging site](https://stage.oceanoutcomes.org.s3-website-us-east-1.amazonaws.com/)
* [Live site](https://www.oceanoutcomes.org.s3-website-us-east-1.amazonaws.com/)

## Content Type and field map
[O2 Content Types.pdf](/O2 Content Types.pdf) maps out all Content Types that are available and which fields exist for each. Use this as a reference when creating new or editing existing content.

## Markdown documentation
1. [Github's guide to mastering markdown](https://guides.github.com/features/mastering-markdown/) - start here as it's the best quick reference I've found
2. [Official documentation from those who created Markdown](http://daringfireball.net/projects/markdown/syntax) - more thorough than the above, but less user-friendly.

## Amazon AWS
There are three important Amazon AWS buckets that can be accessed by logging into the [Amazon S3 console](https://console.aws.amazon.com/s3/home?region=us-west-2) and clicking the S3 icon in the top toolbar:
```
Live site => www.oceanoutcomes.org
Staging site => stage.oceanoutcomes.org
Static Assets => staticassets.oceanoutcomes.org
```
### Live and Staging buckets - use Github to make changes
The Live and Staging buckets should not be modified as they are automatically updated when you make changes to content in the [Ocean Outcomes Gitrub repository](https://github.com/thinkshout/ocean-outcomes)(where you're at now :wink:). Also these buckets map to branches in the Github repo:

```
staging site => master branch
live site => live branch
```

This means updating content in the  ```master``` branch will cause updates to the Staging site and updates in the ```live``` branch will cause updates to the Live site. You can change which Github branch you're using via a dropdown in the upper left of most Github pages.

### Static Assets bucket

The "Static Assets" bucket is for things like images & videos that are used on the site and need to persist each time the site is rebuilt, which happens anytime content is updated.

You can use the Amazon S3 management console to create new folders, upload files, etc. in the Static Assets bucket. Then, you can use the URL for any asset, in the content you edit on the site.

**Example**:
```images/200x200.gif``` is publicly available at this URL: https://s3-us-west-2.amazonaws.com/staticassets.oceanoutcomes.org/images/200x200.gif
...and you can use this URL directly for a field in the content header or in the content body...
```
---
title: Some Text Post
landing-image: https://s3-us-west-2.amazonaws.com/staticassets.oceanoutcomes.org/images/200x200.gif
---
This is some sample body content. It might be the body
of a news article. And now and image after this paragraph.
![alt-text](https://s3-us-west-2.amazonaws.com/staticassets.oceanoutcomes.org/images/200x200.gif)
```

## Markdown notes
* Use a pipe followed by a newline to get markdown working from variables. Variables always looks like ```key: value```. Some examples are what you see in the header of [a page](who-we-are/index.md) or entire data files like what you see in [featured-blocks.yml](_data/featured-blocks.yml).

Example:
```
title-text: This text does not support markdown
teaser-text: |
	Some text containing markdown
```

## Steps for swapping the header image via Github Desktop

* Go to the hero-bg.png file on [Github](https://github.com/thinkshout/ocean-outcomes/blob/master/assets/images/hero-bg.png)
* Click on the little screen icon to the right of the “History” button - this will prompt you to Launch the Github Desktop application, and maybe even clone the project if it’s your first time doing this.
* Github Desktop will automatically open your project in the Finder (if you are on a Mac).
* Swap images here, being sure to name the new header image the same file name as the old one (`hero-bg.png`).
* Click on the “Uncommitted Change” button at the top of Github Desktop, enter a commit message in the “Description” (towards the bottom left), and press “Commit to master”.
* Press the “Sync” button on the top right of Github Desktop to sync the changes with the Master branch up on Github.
* Once the change is on the Master branch, head back to the Github Desktop app, click on “Pull Request”, change the left option to “origin/live”, and click on “Send Pull Request”.
* Hop back onto Github and merge the pull request from there, if all looks well. That should do the trick!


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

When running `rake serve` you should see something similar to `Server address: http://127.0.0.1:4000/`. Visit that address to view the site.

# Troubleshooting

If you run into an error like `error: call to undeclared function 'ffi_prep_closure` you can try [this stackoverflow answer](https://github.com/ffi/ffi/issues/869#issuecomment-810890178). This seems to happen with M1 macs.

If you are not seeing changes when you think you should be try restarting compilation.