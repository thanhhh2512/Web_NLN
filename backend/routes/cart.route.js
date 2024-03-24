const carts = require("../controllers/carts.controller");

const router = require("express").Router();

router
  .route("/carts")
  .get(carts.getCart)
  .put(carts.updateCart)
  .delete(carts.deleteCart);

module.exports = router;
