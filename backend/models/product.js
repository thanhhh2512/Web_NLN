const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fastdescription: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  quantityp: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
    default: 0, // set a default value of 0 if not provided
  },
  price: {
    type: Number,
    required: true,
  },
  mfg: {
    type: Date,
  },
  exp: {
    type: Date,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TypeProduct",
    required: true,
  },
  feature: [
    {
      type: String,
      required: true,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
