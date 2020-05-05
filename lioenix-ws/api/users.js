const router = require('express').Router();
const userService = require('../services/userService');
const auth = require('./auth');

router.post('/user/login', userService.loginUser);

router.post('/user/signup', userService.createUser);

router.post('/user/checkEmail', userService.checkEmail);

// router.put('/user/update/', userService.updateUser);

// router.delete('/user/delete/', userService.deleteUser);


module.exports = router;