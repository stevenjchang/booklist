module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: './public/dist/bundle.js',
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      }
    ]
  }
}
