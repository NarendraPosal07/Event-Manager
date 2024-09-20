const express = require('express');
const router = express();
const authController = require('../controllers/authControllers');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
