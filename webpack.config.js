const path = require('path');

module.exports = {
    entry: './assets/ts/Hostinger.ts', // entry file
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'hostinger-sdk.js',
        path: path.resolve(__dirname, 'assets/js'),
        library: 'HostingerSDK', // the name of the global variable
        libraryTarget: 'umd', // supports various import styles: ES Modules, CommonJS, and global variable
        globalObject: 'this'
    },
    optimization: {
        minimize: false, // to preserve function and class names
    },
};