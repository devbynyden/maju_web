const path = require("path");

module.exports = {
    mode: "production",
    watch: true,
    entry: path.join(__dirname, "webpack", "main"),
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, 'assets/')
        }
    },
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "assets/js"),
    },
    module: {
        rules: [{
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
            {
                test: /\.woff(2)?(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ],
    },
    resolve: {
        extensions: [".json", ".js", ".jsx"],
    },
};
