const express = require('express');
const meController = require('../app/controllers/MeController');
const router = express.Router();

router.get('/admin', meController.admin);
//router.get('/', usersController.index);

module.exports = router;
