const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './apps/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['scss-loader']
          }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', 'css']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    // new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: './dist',
      port: 7887
      // hot: true
    }
  };