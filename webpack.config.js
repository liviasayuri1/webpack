const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.join(__dirname, "./dist"),
        },
        hot:true,
        historyApiFallback:{index: 'index.html'}
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        }
        ]
    },
    plugins: [

        new MiniCssExtractPlugin({filename: 'index.css'}),

        new HtmlWebpackPlugin({filename:'index.html'})

    ]
}