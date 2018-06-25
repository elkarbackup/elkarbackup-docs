# Elkarbackup Documentation

This is the repository for the official documentation of [ElkarBackup](https://www.elkarbackup.org).

Maintained by @parreitu and @xezpeleta

## Contribution

Want to contribute?
We appreciate any insights and improvements.
Feel free to fork and open pull requests, every page of documentation on the website has an 'Edit' button to help you navigate

## Misc

This website has been built using [Docusaurus](https://docusaurus.io).

### Building the website with Docker

Build the image:
```
docker build -t elkarbackup-docs .
```

Run the container:
```
docker run -it --rm -p 3000:80 --env-file .env elkarbackup-docs
```