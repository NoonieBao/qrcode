const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  lintOnSave: false,
  // devServer: {
  //   proxy: {
  //   '/api': {// 匹配所有以 '/api1'开头的请求路径
  //     target: 'http://118.24.127.161:6324',// 代理目标的基础路径
  //     // target: 'http://127.0.0.1:6324',// 代理目标的基础路径
  //     changeOrigin: true,
  //     pathRewrite: {'^/api': ''}
  // }}}
})