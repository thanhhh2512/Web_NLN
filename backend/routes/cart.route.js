
const express = require('express');

const carts = require("../controllers/carts.controller");

const router = express.Router();

router.use(express.json()); // to parse JSON request bodies

router.route('/carts')
    .get(carts.getCart)
    .put(carts.updateCart)
    .delete(carts.deleteCart);

    
module.exports = router;