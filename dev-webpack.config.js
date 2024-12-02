const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/dev-dist'),
        filename: 'dev-bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'dev-style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'dev-index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {esModule: true}
                    },
                    'css-loader',
                ]
            }
        ]
    },
    devServer:{
        open: true,
        hot: true,
        historyApiFallback: {
            index: '/dev-index.html'
        },
    },
    devtool: 'inline-source-map'
}