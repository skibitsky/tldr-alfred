# @alexlafroscia/tldr-alfred-workflow [![CI](https://github.com/alexlafroscia/tldr-alfred/workflows/CI/badge.svg)](https://github.com/alexlafroscia/tldr-alfred/actions?query=workflow%3ACI)

> Alfred workflow for TLDR docs

![Screenshot](./docs/screenshot.png)

## Install

The workflow can be installed as a global NPM dependency. This makes it really easy to keep things up to date, since you can just upgrade to the latest version through NPM.

```bash
npm install --global @alexlafroscia/tldr-alfred-workflow
```

However, if you don't like global NPM packages, you can always clone the repo and install the dependencies; that will set up the workflow as well. The downside is that you'll need to keep the repo updated to the latest version manually, and install the dependencies again after each update.

```bash
git clone https://github.com/alexlafroscia/tldr-alfred.git
cd tldr-alfred
yarn install # Or `npm install` if you don't have yarn
```

*Requires [Node.js](https://nodejs.org) 10+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

## Usage

In Alfred, type `tldr` followed by the name of a command you want to search for, such as `man`.

Continue typing to filter the results by the contents of the code example.

### More Features

- Pressing `CMD-C` on a result will copy the code example to the keyboard
- Pressing `CMD-L` on any of the results will show the full Markdown description of the command
- Pressing `CMD-Y` on any of the results will show the TLDR webpage for the command in the Quicklook window

### Authenticating

If you want to (especially if you're running into rate limiting issues) you can provide your Github username and personal API token to authenticate your requests. You can [set environment variables](https://www.alfredapp.com/help/workflows/script-environment-variables/) called `username` and `password`, with the former being your Github username and the latter being a [personal access token](https://github.com/blog/1509-personal-api-tokens) that you can generate [here](https://github.com/settings/tokens).

## FAQ

### Q: I'm getting an error about rate limiting? What's going on?

I noticed during development that after hitting their API repeatedly, Github started sending `403` responses. If you wait a bit, you should be able to make requests again. Alternatively, try setting a username/password as detailed above.

## License

MIT © [Alex LaFroscia](https://github.com/alexlafroscia)
