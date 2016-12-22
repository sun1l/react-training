/**
 * include the path library so directory paths can be resolved easily
 */
const path = require('path');

module.exports = {

    /**
     * The base directory, an absolute path, for resolving entry points and loaders from configuration.
     * @link https://webpack.js.org/configuration/entry-context/
     */
    context: path.resolve(__dirname, 'src'),
  
    /**
     * Start be defining the entry path of your application
     */
    entry: [
        './index.js'
    ],

    /**
     * Define the output path and filename
     */
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    
    /**
     * Define the modules that should be used to compile
     */
    module: {
        loaders:[
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    
    /**
     * Performance alerts
     * @link https://webpack.js.org/configuration/performance/#performance
     */
    performance: {
        hints: false
    },

    /**
     * Dev Server configuration
     * @link https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
        // Tell the server where to serve content from. This is only necessary if you want to serve static files.
        contentBase: path.join(__dirname, "public"),
        stats: "normal",
        compress: true
    }
};