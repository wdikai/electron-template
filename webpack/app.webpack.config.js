const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
    entry: './src/app.ts',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: { rules: [{
      test: /\.ts(x?)$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }] },
    output: {
      path: __dirname + '/../dist',
      filename: 'app.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
};