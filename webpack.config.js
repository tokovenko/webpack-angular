const webpack = require('webpack');
const extractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || 'development';

function isDevelopment() {
    return NODE_ENV=='development';
}

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        app: './app'
    },
    output: {
        path: __dirname + '/public',
        filename: 'js/[name].js',
        library: '[name]'
    },

    watch: isDevelopment(),

    devtool: isDevelopment() ? 'source-map' : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        }),
        new extractTextPlugin("css/[name].css")
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel?presets[]=es2015'
        }, {
            test: /\.css$/,
            exclude: /(node_modules|bower_components)/,
            loader: extractTextPlugin.extract("style", "css")
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            loader: extractTextPlugin.extract("style", "css!sass")
        }, {
            test: /\.html$/,
            loader: 'file?name=[path][name].[ext]' + (isDevelopment() ? '' : '!html-minify')
        }]

    }
};

if(NODE_ENV=='production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}