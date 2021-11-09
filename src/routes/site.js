const express = require('express');
const siteController = require('../app/controllers/SiteController');
const CheckLoginMiddleware = require('../app/middlewares/CheckLoginMiddleware');
const router = express.Router();

router.get('/about-us', siteController.aboutUs);
router.get('/register', siteController.register);
router.post('/register/stored', siteController.stored);
router.get('/login', siteController.login);
router.post('/login/check', CheckLoginMiddleware, siteController.loginCheked);
router.get('/error404', siteController.error);
router.get('/:slug', siteController.info);
router.get('/', siteController.index);

module.exports = router;
