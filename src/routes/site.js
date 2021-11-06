const express = require('express');
const siteController = require('../app/controllers/SiteController');
const router = express.Router();

router.get('/about-us', siteController.aboutUs);
router.get('/login', siteController.login);
router.get('/', siteController.index);

module.exports = router;
