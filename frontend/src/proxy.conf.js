const PROXY_CONFIG = [
   {
      context: [
         '/api/proxy',
      ],
      target: 'https://receitaws.com.br/',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
         "^/api/proxy": ""
      }
   }
]

module.exports = PROXY_CONFIG;