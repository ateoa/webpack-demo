var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js'
    },
    output: {
        // name hash chunkhash
        filename: 'js/[name].js',
        path: __dirname + '/dist',
        // publicPath: 'http://cdn.com'
    },
    plugins: [
        // 多页面
        new htmlWebpackPlugin({
            // filename: 'index.html',
            template: 'index.html',
            inject: false, // head / body
            title: 'webpack demo title', // htmlWebpackPlugin.options.title
            date: new Date(),
            minify: {
                removeComments: true,
                // collapseWhitespace: true
            },
            // chunks: ['main','a'],
            excludeChunks: ['b']
        }),
        new htmlWebpackPlugin({
            filename: 'index_2.html',
            template: 'index.html',
            inject: false, // head / body
            title: 'webpack demo title 2', // htmlWebpackPlugin.options.title
            date: new Date(),
            minify: {
                removeComments: true,
                // collapseWhitespace: true
            },
            // chunks: ['a']
            excludeChunks: ['a']
        })
    ],
    
}