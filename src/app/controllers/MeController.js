const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        User.find({})
            .then((user) => {
                res.render('me/profile', {
                    user: mutipleMongooseToObject(user),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
