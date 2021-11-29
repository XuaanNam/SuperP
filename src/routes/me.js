const express = require('express');
const meController = require('../app/controllers/MeController');
const router = express.Router();

router.get('/admin', meController.admin);
router.get('/manage', meController.manage);
router.get('/info', meController.info);

router.get('/logout', meController.logout);
router.put('/link/stored', meController.linkStored);
router.delete('/link/delete/:id', meController.linkDelete);
router.patch('/link/update/:id', meController.linkUpdate);
router.patch('/info/update', meController.infoUpdate);

module.exports = router;
