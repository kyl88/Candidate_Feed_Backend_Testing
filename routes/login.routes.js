const express = require('express');
const LoginController = require('../tests/controllers/login.controller');
const router = express.Router();

router.post('/', LoginController.createLogin);

module.exports = router;


