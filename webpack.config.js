const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist', 'js'),
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
		rules: [
            { 
                test: /\.tsx?$/, 
                loader: 'ts-loader' , 
                exclude: /node_modules/ 
            },
        ]
	},
};