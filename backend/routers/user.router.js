const router = require('express').Router();

const UserController = require('../controller/UserController');

router.post('/user/create', UserController.create);
router.post('/user/login', UserController.login);


module.exports = router;