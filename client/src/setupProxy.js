const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        "/api/",
        proxy("http://localhost:9900/api/*", {
            target: 'http://localhost:9901',
            changeOrigin: true,
        })
    );
};
