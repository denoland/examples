---
title: Getting Started
description: A getting started guide to building with Eleventy and Deno.
date: 2022-06-01
layout: layouts/home.njk
permalink: "/getting-started/"
---

# Getting Started

To run this locally, you'll need:
- [11ty](https://www.11ty.dev/)
- [Deno](https://deno.land)

## Install

You can scaffold this app on your local machine with the following command.

```
$ deno run --allow-write --allow-net https://raw.githubusercontent.com/denoland/examples/main/init.ts with-eleventy ./path/to/directory
```

## Build

Build the website:

```shell
$ npx @11ty/eleventy
# or
$ deno task build
```

Run the server locally:

```
$ deno task serve
```

Your site should be available to view at https://localhost:8000.

[Learn more about building 11ty websites](https://www.11ty.dev/docs/tutorials/).

## Hosting

### Deno Deploy

Host this website on the edge with [Deno Deploy](https://deno.com/deploy).

1. Create a GitHub repo

- Create a GitHub repo
- Copy the git remote address
- Run `git init` in your directory
- Run `git remote add origin {remote}`
- Push the repository to GitHub.

2. [Create a Deno Deploy project](https://deno.com/deploy/docs/projects#creating-a-project)

3. [Connect the GitHub repo to the Deno Deploy project](https://deno.com/deploy/docs/projects#git-integration)

4. [Add a GitHub Action](https://deno.com/deploy/docs/deployctl#deployctl-github-action)

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

      - name: Install node
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: denoland/deployctl@v1
        with:
          project: examples-deno-eleventy
          entrypoint: https://deno.land/std@0.131.0/http/file_server.ts
          root: _site
```

Next time you push to your `main` GitHub branch, this Actions workflow will build and deploy to Deno Deploy.

- [Documentation about our GitHub Action deployctl](https://deno.com/deploy/docs/deployctl).
