const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); 
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    output: {
        libraryTarget: 'var',
        library: 'Client', // Used in case we write explicit javascript in the html file to access exports of index.js from this global variable
        // This can be avoided if we register listeners in javascript aswell by using document.getElementBiId which is more in the direction of separation of concerns
        // This reference can be used in js files during development aswell as its a global
        path: path.resolve(__dirname, 'dist'), // specify this for CleanWebpackPlugin to work and see path value
    },
    optimization: {
       minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({}),], // This will only enable optimization in production mode
       minimize: true, // This will enable optimization in development mode aswell https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
    },
    watch: true,
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options: {
                   presets: ['@babel/preset-env'] // Instead of .babelrc external config file at root directory
                }
             },
             {
                test: /\.scss$/,
                use: [
                   MiniCssExtractPlugin.loader,
                   'css-loader', 
                   'sass-loader'
                ]
             }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: false,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: true
        }),
        new MiniCssExtractPlugin({}),
        new WorkboxPlugin.GenerateSW(),
    ]
}
