const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');

module.exports = function CheckLoginMiddleware(req, res, next) {
    User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
        .then((user) => {
            mongooseToObject(user);
            if (user === null) {
                res.redirect('/login?err=1');
            } else {
                res.cookie('id', user._id, {
                    expires: new Date(Date.now() + 8640000),
                });
                res.cookie('username', user.userName, {
                    expires: new Date(Date.now() + 8640000),
                });
                res.cookie('slug', user.slug, {
                    expires: new Date(Date.now() + 8640000),
                });
                next();
            }
        })
        .catch(next);
};
