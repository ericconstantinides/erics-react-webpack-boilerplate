const common = require('./webpack.common.js')

module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true
  },
  ...common
}
