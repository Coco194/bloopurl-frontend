const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Changed path to fix github pages empty page error
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio-vue/" : "/"
})
