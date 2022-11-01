const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      // 跨域
      '/api':{
        target:"https://t.gcsh.cc",
        changeOrigin:true,
        pathRewrite:{
          '^/api':'/api'
        }
        
      }
    }
  }
})
