var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        // name hash chunkhash
        filename: 'js/[name].bundle.js',
        path: __dirname + '/dist',
        // publicPath: 'http://cdn.com'
    },
    plugins: [
        // 多页面
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body', // head / body
            title: 'webpack demo title', // htmlWebpackPlugin.options.title
            // date: new Date(),
            minify: {
                removeComments: true,
                // collapseWhitespace: true
            },
            // chunks: ['main','a'],
            // excludeChunks: ['b']
        })
    ],
    module: {
        loaders:[
            /**
             * html
             */
            {
                test: /\.html$/,
                loaders: [
                    "html-loader"
                ]
            },
            /**
             * tpl
             */
            {
                test: /\.tpl$/,
                loaders: [
                    "ejs-loader"
                ]
            },
            /**
             * babel loader for es6
             */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: path.resolve(__dirname + '/node_modules/'),
                include: [
                    path.resolve(__dirname + '/src/')
                ],
                query: {
                  "presets": ["env"]
                },
            },
            /**
             * css-loader
             */
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader?importLoaders=1",
                    "postcss-loader"
                ]
            },
            /**
             * less
             */
            {
                test: /\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader?importLoaders=1",
                    "postcss-loader",
                    "less-loader"
                ]

            },
            /**
             * sass
             */
            // {
            //     test: /\.sass$/,
            //     loaders: [
            //         "style-loader",
            //         "css-loader?importLoaders=1",
            //         "postcss-loader",
            //         "sass-loader"
            //     ]
            // }
            /**
             * files
             */
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                // loader: "url-loader",
                loaders: [
                    "url-loader?limit=20000&name=assets/[name]-[hash:5].[ext]",
                    "image-webpack-loader"
                ]
            }
        ]
    }
}