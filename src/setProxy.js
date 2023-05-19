import { BACKEND_BASE_URL } from "./constants";

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: BACKEND_BASE_URL,
      changeOrigin: true,
    })
  );
};