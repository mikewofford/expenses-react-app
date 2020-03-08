const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css')
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //this tells babel to run js files
                exclude: /node_modules/
            }, {
                test: /\.s?css$/, //? allows for search of both scss and css. $ specifies ext
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map', 
        devServer: { //Repl for live-server w/more dev features. live-server used in production
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true //This allows other routes to render
        }
    }
};


