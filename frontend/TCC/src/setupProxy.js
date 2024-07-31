const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // ajusta a rota conforme necessário
    createProxyMiddleware({
      target: 'http://localhost:3333', // ajuste conforme necessário
      changeOrigin: true,
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      }
    })
  );
};



