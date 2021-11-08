const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        res.render('home');
    }

    //[GET] /about-us
    aboutUs(req, res, next) {
        res.render('site/about-us');
    }

    //[GET] /register
    register(req, res, next) {
        res.render('site/register');
    }

    //[POST] /register/stored
    stored(req, res, next) {
        console.log(req.body);
        const user = new User(req.body);
        console.log(user);
        user.save()
            .then(() => res.redirect('/login'))
            .catch(next);
    }

    //[GET] /login
    login(req, res, next) {
        var err = req.query.err;
        console.log(err);
        var error = null;
        if (err == 1) {
            error = ' Username or Password is incorrect!';
        }
        res.render('site/login', {
            err: error,
        });
    }
    //[GET] /login/check
    loginCheked(req, res, next) {
        res.redirect('/me/admin');
    }
}

module.exports = new SiteController();
