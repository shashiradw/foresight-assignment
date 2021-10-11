const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller');

//Get method for signup
router.post('/signin', userController.signIn);

router.post('/register', userController.register);

//Router
module.exports=router;

