const Product = require("../models/product");
const productValidate = require("../validations/product.validation");
const e = require("express");
const Image = require("../models/imageModel");

module.exports = {
  getProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Product.findById(id);
      if (!data)
        return res.status(404).json({ error: "Không tìm thấy sản phẩm" });

      return res.status(200).json({ data: data });
    } catch (error) {
      console.error(error); // Log lỗi ra console để debug
      return res.status(500).json({ error: "Internal server error" }); // Trả về lỗi
    }
  },

  getProducts: async (req, res) => {
    try {
      const limit = parseInt(req.query.limit, 10);
      const page = parseInt(req.query.page, 1);

      const query = Product.find().sort({ _id: -1 });
      const data = await query.skip((page - 1) * limit).limit(limit);

      const totalDoc = await Product.countDocuments(); // Sửa lỗi ở đây
      const totalPage = Math.ceil(totalDoc / limit);

      return res.status(200).json({
        data,
        meta: {
          page,
          limit,
          totalDoc,
          totalPage,
        },
      });
    } catch (error) {
      console.error(error); // Log lỗi ra console để debug
      return res.status(500).json({ error: "Internal server error" }); // Trả về lỗi 500 nếu có lỗi xảy ra
    }
  },

  createProduct: async (req, res) => {
    try {
      const {
        name,
        description,
        quantity,
        quantityp,
        weight,
        price,

        exp,
        type,
        fastdescription,
        feature,
      } = req.body;

      const { error } = productValidate({
        name,
        description,
        quantity,
        quantityp,
        weight,
        price,

        exp,
        type,
        fastdescription,
        feature,
      });

      if (error)
        return res.status(400).json({ error: error.details[0].message });

      const image = req?.file;

      if (!image) {
        return res.status(400).json({ error: "Vui lòng thêm ảnh" });
      }

      console.log(image);

      const createdProduct = new Product({
        name,
        description,
        quantity,
        quantityp,
        weight,
        price,

        exp,
        type,
        fastdescription,
        feature,
      });

      createdProduct.images.push({
        // 'public\\images\\image-1619797876169.jpg' => 'public/images/image-1619797876169.jpg'
        path: "/" + image.path.replace(/\\/g, "/"),
        name: image.filename,
      });

      await createdProduct.save();

      return res.status(201).json({ data: createdProduct });
    } catch (error) {
      console.error(error); // Log lỗi ra console để debug
      return res.status(500).json({ error: "Internal server error" }); // Trả về lỗi 500 nếu có lỗi xảy ra
    }
  },

  updateProduct: async (req, res) => {
    try {
      const {
        name,
        description,
        quantity,
        quantityp,
        weight,
        price,

        exp,
        type,
        fastdescription,
        feature,
      } = req.body;

      const existProduct = Product.findById(req.params.id);

      if (!existProduct)
        return res.status(404).json({ error: "Không tìm thấy sản phẩm" });

      existProduct.name = name || existProduct.name;
      existProduct.description = description || existProduct.description;
      existProduct.fastdescription =
        fastdescription || existProduct.fastdescription;
      existProduct.quantity = quantity || existProduct.quantity;
      existProduct.quantityp = quantityp || existProduct.quantityp;
      existProduct.weight = weight || existProduct.weight;
      existProduct.price = price || existProduct.price;

      existProduct.exp = exp || existProduct.exp;
      existProduct.type = type || existProduct.type;
      existProduct.feature = feature || existProduct.feature;

      await existProduct.save();

      return res.status(201).json({ data: existProduct });
    } catch (error) {
      console.error(error); // Log lỗi ra console để debug
      return res.status(500).json({ error: "Internal server error" }); // Trả về lỗi 500 nếu có lỗi xảy ra
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      console.error(error); // Log lỗi ra console để debug
      return res.status(500).json({ error: "Internal server error" }); // Trả về lỗi 500 nếu có lỗi xảy ra
    }
  },
};
