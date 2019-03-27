# stisla-package

A simple node project template. This can be used as a starting point for
libraries or projects depending on OpenLayers where the following is already
preconfigured:

* testing using karma on es6 modules, optionally with coverage
* webpack to produce optimized and debug builds
* jsdoc for API documentation
* autogenerated examples from a template, including highlighted source code

## Useful commands

Install dependencies. `npm install` gives an error. https://github.com/npm/npm/issues/20824

    yarn install

Run unit tests

    yarn test

Build everything (outputs will live in `build/`-directory)

    yarn run build:js # node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js:11のjQueryをjqueryに修正

Start development server with hot reloading (open `http://0.0.0.0:4809/` and find your way through the directory listing)

    yarn start

## Git Submodule

include forked stisla.

    git submodule add https://github.com/kght6123/stisla.git stisla

## npm publish

```sh
$ git tag -a v1.0.0 -m "stisla package version v1.0.0"
$ git push origin tags/v1.0.0
$ npm publish ./
$ npm install stisla-package
```