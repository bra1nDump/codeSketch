const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        port: 8080,
        proxy: { 
            '/api': {
                target: {
                    host: '0.0.0.0',
                    protocol: 'http:',
                    port: 8000
                },
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js']
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