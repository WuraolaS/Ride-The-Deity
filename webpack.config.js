'use strict';

/**
 * Module dependencies.
 */
const path = require('path');

/**
 * Webpack configuration.
 */
module.exports = {
    entry: path.join(__dirname, 'src/game.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'game.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    externals: {
        phaser: 'Phaser'
    }/*,
    devtool: 'inline-source-map'*/
};
