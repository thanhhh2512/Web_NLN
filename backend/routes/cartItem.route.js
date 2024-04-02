const cartItem = require("../controllers/cartItem.controller");

const router = require("express").Router();

router.route("/carts-items/:id").put(cartItem.updateQuantity);
router.route("/carts-items/:id").delete(cartItem.deleteCartItem);
module.exports = router;
