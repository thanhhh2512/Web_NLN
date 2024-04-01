const CartItem = require("../models/CartItem");

exports.updateQuantity = async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const quantity = req.body.quantity;

    await CartItem.findOneAndUpdate(
      { _id: cartItemId },
      { quantity: quantity }
    );

    return res.status(200).json({ message: "Quantity updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
exports.deleteCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.id;

    const deletedCartItem = await CartItem.findByIdAndDelete(cartItemId);
    if (!deletedCartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }
    return res.status(201).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};