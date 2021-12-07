const siteRouter = require('./site');
const meRouter = require('./me');
const err404Middleware = require('../app/middlewares/Error404Middleware');
const err500Middleware = require('../app/middlewares/Error500Middleware');
function route(app) {
    app.use('/me', meRouter);
    app.use('/', siteRouter);
    app.use(err404Middleware, err500Middleware);
}

module.exports = route;
