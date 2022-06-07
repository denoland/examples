---
title: Getting Started
description: Getting started with Hugo on Deno.
layout: index.html
---

# Installation

To run this locally, you'll need:
- [Hugo](https://gohugo.io)
- [Deno](https://deno.land)

Scaffold this app:

```shell
$ deno run --allow-write --allow-net https://raw.githubusercontent.com/denoland/examples/main/init.ts with-hugo ./path/to/directory
```

Build the website:

```shell
$ hugo
# or
$ deno task build
```

Run the server locally:

```
$ deno task serve
```

Your site should be available to view at https://localhost:8000.

[Learn more about building Hugo websites](https://gohugo.io/getting-started/).

# Hosting

## Deno Deploy

Host this website on the edge with Deno Deploy.

1. Create a GitHub repo

2. Create a Deno Deploy project.

3. Connect the GitHub repo to the Deno Deploy project.

4. Add a GitHub Action

Create a `main.yml` file under the directory `.github/workflows`:

```yaml
name: Deploy Hugo to Deno Deploy

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more
# jobs that can run sequentially or in parallel
jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    permissions:
      id-token: write # Allows authentication with Deno Deploy.
      contents: read # Allows cloning the repo.

    steps:
      - name: Clone repository
        uses: actions/checkout@v2
        with:
          submodules: true # Fetch Hugo themes (true or recursive)
          fetch-depth: 0 # Fetch all history for .GitInfo and .Lastmod

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'

      - name: Build site
        run: hugo --minify

      - name: Deploy to Deno Deploy
        uses: denoland/deployctl@v1
        with:
          project: hugo-on-deno-deploy # the name of the project on Deno Deploy
          entrypoint: https://deno.land/std@0.140.0/http/file_server.ts
          root: public # Where the built HTML/CSS/JS files are located.
```

Next time you push to your `main` GitHub branch, this Actions workflow will build and deploy to Deno Deploy.

- [Learn more about deploying Hugo sites with Deno Deploy](https://deno.com/blog/hugo-blog-with-deno-deploy).
- [Documentation about our GitHub Action deployctl](https://deno.com/deploy/docs/deployctl).