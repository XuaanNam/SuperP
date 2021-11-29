const User = require('../models/User');
const Link = require('../models/Link');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /me/info
    info(req, res, next) {
        var id = req.cookies.id;
        var username = req.cookies.username;
        if (id) {
            User.findOne({ _id: id }).then((user) => {
                res.render('me/my-info', {
                    user: mongooseToObject(user),
                    username,
                    status: {
                        ismyself: true,
                    },
                });
            });
        } else {
            res.redirect('/login');
        }
    }

    //[GET] /me/admin
    admin(req, res, next) {
        var id = req.cookies.id;
        var username = req.cookies.username;
        var slug = req.cookies.slug;

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
        var id = req.cookies.id;
        var username = req.cookies.username;
        var slug = req.cookies.slug;

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
        if (id) {
            Link.findOne({ OwnerBy: id }).then((link) => {
                const linkObj = mongooseToObject(link);
                var linkNumber = {
                    id: linkObj.maxId,
                    title: req.body.title,
                    url: req.body.url,
                };
                Link.findOneAndUpdate(
                    { OwnerBy: id },
                    { maxId: linkObj.maxId + 1, $push: { linkNumber } }
                )
                    .then(res.redirect('back'))
                    .catch(next);
            });
        } else {
            res.redirect('/login');
        }
    }
    //[DELETE] /me/link/delete
    linkDelete(req, res, next) {
        var id = req.cookies.id;
        var linkNumber = {
            id: req.params.id,
        };

        Link.findOneAndUpdate({ OwnerBy: id }, { $pull: { linkNumber } })
            .then(res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /me/link/update
    linkUpdate(req, res, next) {
        var id = req.cookies.id;
        var linkNumber = {
            id: req.params.id,
        };

        Link.findOneAndUpdate({ OwnerBy: id }, { $pull: { linkNumber } })
            .then(() => {
                linkNumber = {
                    id: req.params.id,
                    title: req.body.title,
                    url: req.body.url,
                };
                Link.findOneAndUpdate(
                    { OwnerBy: id },
                    { $push: { linkNumber } }
                )
                    .then(res.redirect('back'))
                    .catch(next);
            })
            .catch(next);
    }

    //[PATCH] /me/info/update
    infoUpdate(req, res, next) {
        var id = req.cookies.id;
        console.log(req.body);
        User.findOneAndUpdate({ _id: id }, req.body)
            .then(() => {
                res.clearCookie('username');
                res.cookie('username', req.body.userName, {
                    expires: new Date(Date.now() + 8640000),
                });
                res.redirect('back');
            })
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
