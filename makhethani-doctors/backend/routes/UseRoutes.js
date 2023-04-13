
const express  = require('express');
const { LoginController, RegisterController } = require('../controllers/userController');

// router object

const router = express.Router();

// routes

// login post request

router.post('/login',LoginController );

// Register post request

router.post('/register',RegisterController);

module.exports = router;