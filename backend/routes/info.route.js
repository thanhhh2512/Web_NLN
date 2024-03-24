const express = require('express');

const info = require("../controllers/info.controller");

const router = express.Router();

router.use(express.json());

router.route('/info')
    .get(info.getUser)
    .put(info.updateUser)

module.exports = router;
