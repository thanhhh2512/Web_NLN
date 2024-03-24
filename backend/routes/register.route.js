const express = require("express");

const register = require("../controllers/register.controller");

const router = express.Router();

router.use(express.json()); // to parse JSON request bodies

router.route("/register").post(register.createUser);

module.exports = router;
