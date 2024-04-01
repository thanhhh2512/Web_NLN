const router = require("express").Router();
const controller = require("../controllers/product.controller");
const upload = require("../middlewares/multer");

router.get("/products", controller.getProducts);
router.get("/products/:id", controller.getProduct);
router.post("/products", upload.single("image"), controller.createProduct);
router.put("/products/:id", upload.single("image"),controller.updateProduct);
router.delete("/products/:id", controller.deleteProduct);

// router.patch(

//   upload.array("images", 10),
//   productController.create
// );
module.exports = router;
