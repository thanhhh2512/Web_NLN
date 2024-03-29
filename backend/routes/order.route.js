const express = require("express");

const order = require("../controllers/order.controller");

const router = express.Router();

router.route("/order").get(order.getOrders).post(order.updateOrder);

router
  .route("/order/:orderId")
  .put(order.updateOrder)
  .delete(order.deleteOrder)
  .get(order.getOrder);

module.exports = router;
