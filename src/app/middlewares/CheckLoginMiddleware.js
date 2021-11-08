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
                next();
            }
        })
        .catch((err) => {});
};
