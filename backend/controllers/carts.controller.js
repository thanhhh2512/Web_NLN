const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getCart = async (req, res) => {
  try {
    const userId = req.body.user;
    if (!userId) throw new Error("User ID is required");

    const data = await Cart.findOne({ user: userId });

    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const userId = req.body.user;
    if (!userId) throw new Error("User ID is required");

    const updatedData = req.body.cartItems;

    const cart = await Cart.findOneAndUpdate({ user: userId }, updatedData);

    return res.status(200).json({ data: updatedCart });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const userId = req.body.user;
    if (!userId) throw new Error("User ID is required");

    const deletedCart = await Cart.findOneAndDelete({ user: userId });
    if (!deletedCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    return res.status(201).json({ message: "Cart deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const userId = req.body.user;

    const { product, quantity } = req.body;

    product = {
      product: product.name,
      quantity: quantity,
    };

    const productDB = await Product.findById(product);

    if (!productDB) throw new Error("Product not found");

    const cartUpdate = await Cart.findOneAndUpdate(
      { user: userId },
      {
        $push: {
          cartItems: {
            product: productDB,
            quantity: quantity,
          },
        },
      }
    );

    if (!userId) throw new Error("User ID is required");

    const deletedCart = await Cart.findOneAndDelete({ user: userId });
    if (!deletedCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    return res.status(201).json({ message: "Cart deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
