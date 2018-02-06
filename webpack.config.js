const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./build",
        publicPath: "./build/",
        chunkFilename: "[name].chunk.js",
        filename: "main.js"
    },
    module: {
        rules: [
          {
              test: /\.js/,
              loader: 'babel-loader',
              exclude: "./node_modules/"
          },
          {
            test: /\.scss/,
            exclude: "./node_modules/",
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: [
                'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]',
                'postcss-loader',
                'sass-loader'
              ]
            })
          },
        ]
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template: 'template.ejs',
      //   title: 'Photo Gallery',
      //   filename: '../photo-gallery.html',
      //   js: ['main.js'],
      //   css: ['./build/styles.css']
      // }),
        new ExtractTextPlugin({filename: 'styles.css', allChunks: true}),
        // new WebpackShellPlugin({
        //   onBuildExit: ['postcss --use postcss-prepend-selector --config postcss.json --replace build/styles.css']
        // })
    ]
};
