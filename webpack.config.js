
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const path = require('path');

module.exports = {

    mode: 'development',
    //define entry point
    entry: {
        app: path.join(__dirname, '/app.ts')
    },
    //define output point
    output: {

        path: path.resolve(__dirname, './build_Development'),
        filename: 'app.js'
        // filename: 'app.js',
        // path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};