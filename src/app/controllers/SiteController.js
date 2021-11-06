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

    //[GET] /login
    login(req, res, next) {
        res.render('site/login');
    }
}

module.exports = new SiteController();
