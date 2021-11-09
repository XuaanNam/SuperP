const User = require('../models/User');
const Link = require('../models/Link');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        if (req.cookies.id) {
            res.render('home', {
                status: {
                    islogin: true,
                },
            });
        } else {
            res.render('home', {
                status: {
                    isntlogin: true,
                },
            });
        }
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
        const user = new User(req.body);
        user.save()
            .then(() => {
                const link = new Link({
                    OwnerBy: user._id,
                });
                link.save().then(() => res.redirect('/login'));
            })
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
    //[POST] /login/check
    loginCheked(req, res, next) {
        res.redirect('/me/admin');
    }

    //[GET] /eror
    error(req, res, next) {
        res.render('site/error404');
    }

    //[GET] /:slug
    info(req, res, next) {
        var slug = req.params.slug;
        User.findOne({ slug: slug })
            .then((user) => {
                mongooseToObject(user);
                if (user === null) {
                    res.render('site/user-not-found', {
                        fullname: 'Your full name is here',
                    });
                } else {
                    Link.findOne({ OwnerBy: user._id })
                        .then((link) => {
                            res.render('site/info', {
                                link: mongooseToObject(link),
                                fullname: user.fullName,
                            });
                        })
                        .catch(next);
                }
            })
            .catch(next);
    }
}

module.exports = new SiteController();
