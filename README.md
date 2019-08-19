# Jekyll NPM Boilerplate
This setup allows us to take full advantage of JavaScripts powerful ES6 features on our Jekyll site.
Also includes SASS functionality.

## Install template
```
yarn install
```

## License
Code released under the [ISC license](./LICENSCE.md).

## Build instructions to Add NPM to Jekyll (used to build this template)
### Init NPM
```
yarn init
```
### Create folder for webpack and install webpack and loaders
```
mkdir webpack
yarn add --dev webpack webpack-cli babel-core babel-loader babel-preset-env
```
### Create webpack.config.js file
```
const path = require("path");

module.exports = {
  mode: "production",
  watch: true,
  entry: path.join(__dirname, "webpack", "main"),
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "assets/js"),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "bower_components"),
        ],
        loader: "babel-loader",
        query: {
          presets: ["env"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
};
```

### Configurate package.json
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "./node_modules/.bin/webpack --watch | bundle exec jekyll serve --livereload --incremental",
    "build": "./node_modules/.bin/webpack | bundle exec jekyll build"
  },
```

## Powered By
