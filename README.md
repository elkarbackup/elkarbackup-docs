# Elkarbackup Documentation

[![Build](https://github.com/elkarbackup/elkarbackup-docs/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/elkarbackup/elkarbackup-docs/actions/workflows/gh-pages.yml)

This is the repository for the official documentation of [ElkarBackup](https://www.elkarbackup.org).

Maintained by @parreitu and @xezpeleta

## Contribution

Want to contribute?
We appreciate any insights and improvements.
Feel free to fork and open pull requests, every page of documentation on the website has an 'Edit' button to help you navigate

## Misc

This website has been built using [Docusaurus](https://docusaurus.io).

### Building the website with Docker

GitHub Action will build the static web after every commit and push it to `gh-pages` branch.

However, you can also build the website by yourself. You have to install the required dependencies (npm/yarn) and follow Docusaurus [instructions](https://docusaurus.io/docs/en/publishing).

Alternatively, if you already have Docker installed, you can use the built-in Dockerfile.

Build the image:
```
docker build -t elkarbackup-docs .
```

Run the container:
```
docker run -it --rm -p 3000:80 --env-file .env elkarbackup-docs
```
