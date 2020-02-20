const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    const host = process.env.REACT_APP_HOST;
    app.use(
        '/api',
        proxy({
            target: `http://${host || 'server'}:9901`,
            toProxy: true,
            changeOrigin: true,
        })
    );
};
