const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mm.js',
    // library: {
    //     name: 'webpackNumbers',
    //     type: 'umd'
    // },
    clean: false,
  },
  // externals: {
  //   lodash: {
  //   commonjs: 'lodash',
  //   commonjs2: 'lodash',
  //   amd: 'lodash',
  //   root: '_',
  //   },
  //  },
};