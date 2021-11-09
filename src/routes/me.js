const express = require('express');
const meController = require('../app/controllers/MeController');
const router = express.Router();

router.get('/admin', meController.admin);
router.get('/manage', meController.manage);
router.get('/logout', meController.logout);
router.put('/link/stored', meController.linkStored);
router.delete('/link/delete', meController.linkDelete);
//router.get('/', usersController.index);

module.exports = router;
