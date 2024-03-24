const express = require("express");

const userController = require("../controllers/user.controller");

const router = express.Router();

router.use(express.json()); // to parse JSON request bodies

router.route("/register").post(userController.createUser);

router.route("/login").post(userController.login)


router.route('/info')
    .get(userController.getUser)
    .put(userController.updateUser)


module.exports = router;
