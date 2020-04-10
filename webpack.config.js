const path = required('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devTool: 'cheap-module-eval-source-map',
    mudule: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' }, /* injecting css code into html file */
                    { loader: 'css-loader', options: { /* understand css imports, add conf to support modules */
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    } 
                },
                { loader: 'postcss-loader', oprions: { /* processes css code automatically prefexises, to work in older browsers */
                    ident: 'postcss',
                    plugins: () => [autoprefixer()] /* add browserlist in package.json  */
                }} 
                ]
            }
        ]
    }
};
