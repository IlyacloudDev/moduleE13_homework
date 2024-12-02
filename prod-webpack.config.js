const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/prod-dist'),
        filename: 'prod-bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'prod-style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'prod-index.html'
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
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    }
    
}
