const User = require('../models/User');
const Link = require('../models/Link');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {}

    //[GET] /me/admin
    admin(req, res, next) {
        var id = req.cookies.id ? req.cookies.id : null;
        var username = req.cookies.username ? req.cookies.username : null;
        var slug = req.cookies.slug ? req.cookies.slug : null;

        if (id) {
            if (username) {
                res.render('me/admin-create', {
                    username,
                    slug,
                    status: {
                        iscreate: true,
                    },
                });
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    }
    //[GET] /me/manage
    manage(req, res, next) {
        var id = req.cookies.id ? req.cookies.id : null;
        var username = req.cookies.username ? req.cookies.username : null;
        var slug = req.cookies.slug ? req.cookies.slug : null;

        if (id) {
            if (username) {
                Link.findOne({ OwnerBy: id }).then((link) => {
                    res.render('me/admin-manage', {
                        link: mongooseToObject(link),
                        username,
                        slug,
                        status: {
                            ismanage: true,
                        },
                    });
                });
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    }

    //[PUT] /me/link/stored
    linkStored(req, res, next) {
        var id = req.cookies.id;
        var linkNumber = {
            title: req.body.title,
            url: req.body.url,
        };

        Link.findOneAndUpdate({ OwnerBy: id }, { $push: { linkNumber } })
            .then(res.redirect('back'))
            .catch(next);
    }
    //[DELETE] /me/link/delete
    linkDelete(req, res, next) {
        var id = req.cookies.id;
        var linkNumber = {
            title: req.body.title,
            url: req.body.url,
        };

        Link.findOneAndUpdate({ OwnerBy: id }, { $pull: { linkNumber } })
            .then(res.redirect('back'))
            .catch(next);
    }

    //[GET] /me/logout
    logout(req, res, next) {
        res.clearCookie('id');
        res.clearCookie('username');
        res.clearCookie('slug');
        res.redirect('/');
    }
}

module.exports = new SiteController();
