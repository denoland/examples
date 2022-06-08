---
layout: default
title: "Getting Started"
---

# Getting Started

To run this locally, you'll need:
- [Jekyll](https://jekyllrb.com)
- [Deno](https://deno.land)

## Install


You can scaffold this app on your local machine with the following command.

```
$ deno run --allow-write --allow-net https://raw.githubusercontent.com/denoland/examples/main/init.ts with-jekyll ./path/to/directory
```

## Build

Build the website:

```shell
$ jekyll build
# or
$ deno task build
```

Run the server locally:

```
$ deno task serve
```

Your site should be available to view at https://localhost:8000.

[Learn more about building Jekyll websites](https://jekyllrb.com/resources/).

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
name: Deploy Jekyll to Deno Deploy

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
        uses: actions/checkout@v3

      - name: Build
        uses: gha-utilities/jekyll-build@v0.0.8
        with:
          source: with-jekyll
          destination: _site

      - name: Deploy
        uses: denoland/deployctl@v1
        with:
          project: {YOUR PROJECT NAME}
          entrypoint: https://deno.land/std@0.131.0/http/file_server.ts
          root: _site
```

Next time you push to your `main` GitHub branch, this Actions workflow will build and deploy to Deno Deploy.

- [Documentation about our GitHub Action deployctl](https://deno.com/deploy/docs/deployctl).
