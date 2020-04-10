const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin'); /* accepts results of file transformations to use in bigger transformations */

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
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
                    {
                        loader: 'css-loader', options: { /* understand css imports, add conf to support modules */
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]_[local]_[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader', options: { /* processes css code automatically prefexises, to work in older browsers */
                            ident: 'postcss',
                            plugins: () => [autoprefixer()] /* add browserlist in package.json  */
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]' /* set image size limit, and how dist folder file format will look like */
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html', /* basis file as a starting point */
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
