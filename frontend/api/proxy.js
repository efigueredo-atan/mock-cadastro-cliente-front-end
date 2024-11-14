const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const proxy = createProxyMiddleware({
    target: 'https://receitaws.com.br/', // substitua pela URL da API externa
    changeOrigin: true,
    pathRewrite: {
      '^/api/proxy': '', // remove o prefixo de /api/proxy
    },
  });

  proxy(req, res);
};