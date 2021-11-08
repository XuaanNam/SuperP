const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {}

    //[GET] /me/admin
    admin(req, res, next) {
        res.render('me/admin');
    }
}

module.exports = new SiteController();
