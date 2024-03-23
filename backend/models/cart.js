const mongoose = require('mongoose');

const cartItemsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    default: 1
  },
});

const cartSchema = new mongoose.Schema({
  items: [cartItemsSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

module.exports = mongoose.model('Cart', cartSchema);