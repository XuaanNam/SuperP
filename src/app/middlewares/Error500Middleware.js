module.exports = function Error500Middleware(err, req, res, next) {
    res.status(err.status || 500);
    res.redirect('/error404');
};
