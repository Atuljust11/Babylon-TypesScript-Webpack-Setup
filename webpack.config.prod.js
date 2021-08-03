const path = require('path');

module.exports = {
    mode: 'production',
    //define entry point
    entry: {
        app: path.join(__dirname, '/app.ts')
    },
    //define output point
    output: {
        // filename: 'app.js',
        // path: __dirname
        path: path.resolve(__dirname, './build_Production'),
        filename: 'app.js'
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
    },
};