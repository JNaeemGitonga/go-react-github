const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        proxy({
            target: `http://${process.env.HOST}:9901`,
            toProxy: true,
            changeOrigin: true,
        })
    );
};
