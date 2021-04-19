# Web Boardgame Template

This is a template repository that can give you a start in modelling a boardgame
with a web UI.

Besides the necessary parts of the Haskell model, this template also contains
the basis for a web UI build with WebPack.

## Cloning

To get your own copy of this repository you should "clone" it in one of the
following ways:

### GitHub

Click the "Use this template" button and follow the instructions.

![Use this template button](https://docs.github.com/assets/images/help/repository/use-this-template-button.png)  
From GitHub Docs: [Creating a repository from a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)

### GitHub CLI

If you are use the [GitHub CLI](https://cli.github.com/) you can enter the
following command:

```sh
gh repo create <repo-name> --template Boardgame-DSL/Web-Boardgame-Template
```

### Without GitHub

If you don't use GitHub, you can simply download the template as a [zip](https://github.com/Boardgame-DSL/Web-Boardgame-Template/archive/main.zip)
or a [tarball](https://github.com/Boardgame-DSL/Web-Boardgame-Template/archive/main.tar.gz).

## Usage

This template uses [Cabal](https://www.haskell.org/cabal/), [npm](https://docs.npmjs.com/about-npm),
and [WebPack](https://webpack.js.org/#write-your-code), familiarize yourself
with these tools on their respective web pages.

Before you start coding you should probably customize the project files so that
they match you project.

### Building Haskell targeting WASM

To build the Haskell model targeting WebAssembly you'll need a special compiler,
the god old GHC can't help you here. This other tool is called [asterius](https://github.com/tweag/asterius/)
and is most easily used in a [docker](https://www.docker.com/) container.

More information about how build targeting WASM can be found in
[`HOW-TO-WASM.md`](./HOW-TO-WASM.md).

### Using WebPack

In the view of this project we have a npm project. To get started with that, run
`npm install`. Write HTML in [`view/index.html`](./view/index.html) and
JavaScript in the [`view/src`](./view/src/) folder (starting in the
[`view/src/index.js`](./view/src/index.js) file). use `npm start` to open a
local development server (standard on port `9090`, change the in
[`view/webpack.config.js`](./view/webpack.config.js)), and `npm run build` to
produce exportable HTML and JavaScript files in the `dist` folder.
