const router = require('express').Router();
const userService = require('../services/userService');

router.post('/user/signin', userService.loginUser);

router.post('/user/signup', userService.createUser);

router.get('/user/dashboard/:userId', userService.getUserById);

router.patch('/user/update/:userId', userService.updateUser);

router.delete('/user/delete/:userId', userService.deleteUser);


module.exports = router;