const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');

router.post('/singup', authController.singup);
router.post('/login', authController.login)

module.exports = router;