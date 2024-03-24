const express = require('express');

const info = require("../controllers/info.controller");

const router = express.Router();



router.route('/info')
    .get(info.getUser)
    .put(info.updateUser)

module.exports = router;
