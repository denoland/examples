# Deno x Jekyll Starter Kit

The Jekyll Starter Kit is a simple framework for starting your own Jekyll project. It was created out of a need to have a simple and quick framework to build my Jekyll sites from. I noticed that there were a number of things that were common among all of my Jekyll sites, from certain best practices for web development, to ways that I liked to do things, to certain styles that I always used.

Instead of always starting from a blank slate and having to look through my past work to find what I needed, or having to always strip down the default the Jekyll theme before I even start adding my own code, I decided to take all of the lessons and best practices that I learned from building my first few Jekyll sites, and distill them into a simple framework for starting my next Jekyll project. Hopefully, this may interest some of you who are looking to build your own Jekyll sites, and would like a framework to start from.

## Notable features

* Compatible with [Github Pages](https://pages.github.com/).

* Support for Jekyll's built-in Sass/SCSS preprocessor and data files for making customizing easier.

* Optimized for search engines.

## Table of Contents

1. [Introduction](#introduction)
   1. [What is Jekyll](#what-is-jekyll)
   2. [Never Used Jeykll Before?](#never-used-jekyll-before)
2. [Installation](#installation)
   1. [GitHub Pages Installation](#github-pages-installation)
   2. [Local Installation](#local-installation)
   3. [Directory Structure](#directory-structure)
   4. [Starting From Scratch](#starting-from-scratch)
3. [Configuration](#configuration)
   1. [Sample Posts](#sample-posts)
   2. [Site Variables](#site-variables)
   3. [Adding Menu Pages](#adding-menu-pages)
   4. [Posts](#posts)
   5. [Layouts](#layouts)
   6. [YAML Front Block Matter](#yaml-front-block-matter)
4. [Features](#features)
   1. [Design Considerations](#design-considerations)
   2. [Disqus](#disqus)
   3. [Google Analytics](#google-analytics)
   4. [RSS Feeds](#rss-feeds)
   5. [Social Media Icons](#social-media-icons)
   6. [MathJax](#mathjax)
   7. [Syntax Highlighting](#syntax-highlighting)
   8. [Markdown](#markdown)
5. [Everything Else](#everything-else)
6. [Contributing](#Contributing)
7. [Questions?](#questions)
8. [Credits](#credits)
9. [License](#license)

## Introduction

The Jekyll Starter Kit comes ready to use out of the box - simply fork or clone this repository, and you can start developing your Jekyll site right away. Navigate to the root folder using the command line, and type in `jekyll serve`. If you would like to start with a blank slate, then delete the sample code in the `all.sass` file.


If you are unfamiliar with [GitHub Pages](https://pages.github.com/), you can check out [their documentation](https://help.github.com/categories/github-pages-basics/) for more information. [Jonathan McGlone's guide](http://jmcglone.com/guides/github-pages/) on creating and hosting a personal site on GitHub is also a good resource.

### What is Jekyll?

Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites. Basically, Jekyll takes your page content along with template files and produces a complete website. For more information, visit the [official Jekyll site](https://jekyllrb.com/docs/home/) for their documentation.

### Never Used Jekyll Before?

The beauty of hosting your website on GitHub is that you don't have to actually have Jekyll installed on your computer. Everything can be done through the GitHub code editor, with minimal knowledge of how to use Jekyll or the command line. All you have to do is add your posts to the `_posts` directory and edit the `_config.yml` file to change the site settings. With some rudimentary knowledge of HTML and CSS, you can even modify the site to your liking. This can all be done through the GitHub code editor, which acts like a content management system (CMS).

## Installation

### GitHub Pages Installation

To start using Jekyll right away using GitHub Pages, [fork the jekyll-starter-kit repository on GitHub](https://github.com/LeNPaul/jekyll-starter-kit/fork). From there, you can rename your repository to 'USERNAME.github.io', where 'USERNAME' is your GitHub username, and edit the `settings.yml` file in the `_data` folder to your liking. Ensure that you have a branch named `gh-pages`. Your website should be ready immediately at 'http://USERNAME.github.io'. Note: if you are hosting several sites under the same GitHub username, then you will have to use [Project Pages instead of User Pages](https://help.github.com/articles/user-organization-and-project-pages/) - just change the repository name to something other than 'http://USERNAME.github.io'.

Head over to the `_posts` directory to view all the posts that are currently on the website, and to see examples of what post files generally look like. You can simply just duplicate the template post and start adding your own content.

### Local Installation

For a full local installation of jekyll-starter-kit, [download your own copy of jekyll-starter-kit](https://github.com/LeNPaul/jekyll-starter-kit/archive/gh-pages.zip) and unzip it into it's own directory. From there, open up your favorite command line tool, enter `bundle install`, and then enter `jekyll serve`. Your site should be up and running locally at [http://localhost:4000](http://localhost:4000).

### Directory Structure

If you are familiar with Jekyll, then the jekyll-starter-kit directory structure shouldn't be too difficult to navigate. The following some highlights of the differences you might notice between the default directory structure. More information on what these folders and files do can be found in the [Jekyll documentation site](https://jekyllrb.com/docs/structure/).

```bash
jekyll-starter-kit/
├── _data                      # Data files
|  └── authors.yml             # For managing multiple authors
|  └── settings.yml            # Theme settings and custom text
├── _includes                  # Theme includes
├── _layouts                   # Theme layouts (see below for details)
├── _posts                     # Where all your posts will go
├── assets                     # Style sheets and images are found here
|  ├── css                     # Style sheets go here
|  |  └── main.css             # Main CSS file
|  |  └── syntax.css           # Style sheet for code syntax highlighting
|  └── img                     # Images go here
├── menu                       # Menu pages
├── _config.yml                # Site build settings
└── index.md                   # Home page
```

### Assets

This folder contains all of the images, CSS, and JavaScript for the site, and within these folders, there is some structure that will help in organizing all of your assets.

#### CSS

This folder is further subdivided into `1-tools`, `2-base`, and `3-sections`. The 'tools' folder can be used to store CSS libraries or generic CSS files that you may have that you use for your other projects. The 'base' folder is used to store any CSS relating to styling HTML tags, for example. The 'sections' folder is the one that you will probably use the most, and will be where you store your main CSS styling. Generally, I try to have one SASS file corresponding to an HTML file in the `includes` or `layouts` folder.

### Managing Site variables

Whenever possible, I try to avoid hardcoding certain values into the site code, such as author names, menu links, and so on. Fortunately, Jekyll offers tools that allow you to manage your site variables easily, allowing you to use variables in place of hardcoded values. I typically store all site variables in the `_data` folder, under the `settings.yml` files. It's not too difficult to add more files to better organize your site variables, and then just add them into your site using [Liquid tags and variables]().

### CSS Styling

Following the paradigm above, all the SASS variables can be found in the `all.sass` file in the `assets/css` folder directory. I try to turn commonly used styles into variables that I can call in the SASS code, instead of always having to hardcode everything.

### Starting From Scratch

To completely start from scratch, simply delete all the files in the `_posts`, `assets/img`, and `menu` folder, and add your own content. You may also replace the `README.md` file with your own README. Everything in the `_data` folder and `_config.yml` file can be edited to suit your needs. You may also change the `favicon.ico` file to your own favicon.

## Configuration

### Sample Posts

Visit the [the demo site](https://lenpaul.github.io/jekyll-starter-kit/) to find sample posts that show what different types of text formatting look like, as well as best practices for setting up your own site.

### Site Variables

To change site build settings, edit the `_config.yml` file found in the root of your repository, which you can tweak however you like. More information on configuration settings and plugins can be found on [the Jekyll documentation site](https://jekyllrb.com/docs/configuration/).

If you are hosting your site on GitHub Pages, then committing a change to the `_config.yml` file will force a rebuild of your site with Jekyll. Any changes made should be viewable soon after. If you are hosting your site locally, then you must run `jekyll serve` again for the changes to take place.

In the `settings.yml` and `authors.yml` files found in the `_data` folder, you will be able to customize your site settings, such as the title of your site, what shows up in your menu, and social media information. To make author organization easier, especially if you have multiple authors, all author information is stored in the `authors.yml` file.

### Adding Menu Pages

The menu pages are found in the `menu` folder in the root directory, and can be added to your menu in the `settings.yml` file.

### Posts

You will find example posts in your `_posts` directory. Go ahead and edit any post and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention of `YYYY-MM-DD-name-of-post.md` and includes the necessary front matter. Take a look at any sample post to get an idea about how it works. If you already have a website built with Jekyll, simply copy over your posts to migrate to jekyll-starter-kit. Note: Images were designed to be 1024x600 pixels, with teaser images being 1024x380 pixels.

### Layouts

There are two main layout options that are included with jekyll-starter-kit: post and page. Layouts are specified through the [YAML front block matter](https://jekyllrb.com/docs/frontmatter/). Any file that contains a YAML front block matter will be processed by Jekyll. For example:

```
---
layout: post
title: "Example Post"
---
```

Examples of what posts looks like can be found in the `_posts` directory, which includes this post you are reading right now. Posts are the basic blog post layout, which includes a header image, post content, author name, date published, social media sharing links, and related posts.

Pages are essentially the post layout without any of the extra features of the posts layout. An example of what pages look like can be found at the [About](https://lenpaul.github.io/jekyll-starter-kit/menu/about.html) and [Contacts](https://lenpaul.github.io/jekyll-starter-kit/menu/contacts.html).

In addition to the two main layout options above, there are also custom layouts that have been created for the [home page](https://lenpaul.github.io/jekyll-starter-kit/) and the [archives page](https://lenpaul.github.io/jekyll-starter-kit/writing.html). These are simply just page layouts with some [Liquid template code](https://shopify.github.io/liquid/). Check out the `index.html` file in the root directory for what the code looks like.

### YAML Front Block Matter

The recommended YAML front block is:

```
---
layout:
title:
categories:
tags: []
image:
---
```

`layout` specifies which layout to use, `title` is the page or post title, `categories` can be used to better organize your posts, `tags` are used to show related posts, as well as indicate what topics are related in a given post, and `image` specifies which images to use. There are two main types of images that can be used in a given post, the `feature` and the `teaser`, which are typically the same image, except the teaser image is cropped for the home page. You can give credit to images under `credit`, and provide a link if possible under `creditlink`.

## Features

### Design Considerations

jekyll-starter-kit was designed to be a minimalist theme in order for the focus to remain on your content. For example, links are signified mainly through an underline text-decoration, in order to maximize the perceived affordance of clickability (I originally just wanted to make the links a darker shade of grey).

### Disqus

jekyll-starter-kit supports comments at the end of posts through [Disqus](https://disqus.com/). In order to activate Disqus commenting, set `disqus.comments` to true in the `settings.yml` file under `_data`. If you do not have a Disqus account already, you will have to set one up, and create a profile for your website. You will be given a `disqus_shortname` that will be used to generate the appropriate comments sections for your site. More information on [how to set up Disqus](http://www.perfectlyrandom.org/2014/06/29/adding-disqus-to-your-jekyll-powered-github-pages/).

### Google Analytics

It is possible to track your site statistics through [Google Analytics](https://www.google.com/analytics/). Similar to Disqus, you will have to create an account for Google Analytics, and enter the correct Google ID for your site under `google-ID` in the `settings.yml` file. More information on [how to set up Google Analytics](https://michaelsoolee.com/google-analytics-jekyll/). Note: If you are not using Google Analytics, please change `google-ID` to an empty string.

### RSS Feeds

Atom is supported through [Jekyll-Feed](https://github.com/jekyll/jekyll-feed) and RSS 2.0 is supported through [RSS autodiscovery](http://www.rssboard.org/rss-autodiscovery).

### Social Media Icons

All social media icons are courtesy of [Font Awesome](http://fontawesome.io/). You can change which icons appear, as well as the account that they link to, in the `settings.yml` file in the `_data` folder.

### Syntax Highlighting

The Jekyll Starter Kit provides syntax highlighting through [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/). Syntax highlighting allows you to display source code in different colors and fonts depending on what programming language is being displayed. You can find the full list of supported programming languages [here](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers). Another option is to embed your code through [Gist](https://en.support.wordpress.com/gist/).

### Markdown

As always, Jekyll offers support for GitHub Flavored Markdown, which allows you to format your posts using the [Markdown syntax](https://guides.github.com/features/mastering-markdown/). Examples of these text formatting features can be seen below. You can find this post in the `_posts` directory as well as the `README.md` file.

## Everything Else

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

## Contributing

If you would like to make a feature request, or report a bug or typo in the documentation, then please [submit a GitHub issue](https://github.com/LeNPaul/jekyll-starter-kit/issues/new). If you would like to make a contribution, then feel free to [submit a pull request](https://help.github.com/articles/about-pull-requests/) - as a bonus, I will credit all contributors below! If this is your first pull request, it may be helpful to read up on the [GitHub Flow](https://guides.github.com/introduction/flow/) first.

The Jekyll Starter Kit has been designed as a base for users to customize and fit to their own unique needs. Please keep this in mind when requesting features and/or submitting pull requests. Some examples of changes that I would love to see are things that would make the site easier to use, or better ways of doing things. Please avoid changes that do not benefit the majority of users.

## Questions?

This theme is completely free and open source software. You may use it however you want, as it is distributed under the [MIT License](http://choosealicense.com/licenses/mit/). If you are having any problems, any questions or suggestions, feel free to [tweet at me](https://twitter.com/intent/tweet?text=My%question%about%jekyll-starter-kit%is:%&amp;via=paululele), or [file a GitHub issue](https://github.com/lenpaul/jekyll-starter-kit/issues/new).

## Credits

### Creator

#### Paul Le

* [www.lenpaul.com](http://lenpaul.com)

* [Twitter](https://twitter.com/paululele)

* [GitHub](https://github.com/LeNPaul)

### Contributors

* Be the first to contribute!

### Icons + Demo Images

* [Death to Stock](https://deathtothestockphoto.com/)

* [Font Awesome](http://fontawesome.io/)

### Other

* [Jekyll](https://jekyllrb.com/)

* [Free Code Camp](https://www.freecodecamp.org)

* [Khan Academy](https://www.khanacademy.org/)

## License

Open sourced under the [MIT license](https://github.com/LeNPaul/jekyll-starter-kit/blob/gh-pages/LICENSE.md).
