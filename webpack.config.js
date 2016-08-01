var webpack = require('webpack');

var plugins = [
  new webpack.DefinePlugin({
    	'process.env': { NODE_ENV: '"production"'}
  })
];

module.exports = {

  entry: ['./DateTime.js'],

  output: {
    path: __dirname + '/dist/',
    library: 'Datetime',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js']
  },

  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'moment': 'moment'
  },

  plugins: plugins
};
