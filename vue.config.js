const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  devServer: {
    port: 3002
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    }
  }
})
