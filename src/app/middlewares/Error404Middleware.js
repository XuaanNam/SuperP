module.exports = function Error404Middleware(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};
