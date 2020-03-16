const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    const server = process.env.REACT_APP_HOST_SERVER;
    const auth = process.env.REACT_APP_HOST_AUTH;
    console.log('LOOK AT THE HOST', auth)
    app.use(
        '/api/auth',
        proxy({
            target: `http://${auth || 'auth'}:9903`,
            toProxy: true,
            changeOrigin: true,
        })
    );
    app.use(
        '/api',
        proxy({
            target: `http://${server || 'server'}:9901`,
            toProxy: true,
            changeOrigin: true,
        })
    );
};
