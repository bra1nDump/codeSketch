const join = require('path').join;

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        contentBase: join(__dirname, 'dist'),
        publicPath: '/',
        port: 8080
    },
    output: {
        filename: 'bundle.js',
        path: join(__dirname, 'dist'),
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