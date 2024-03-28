const router = require("express").Router();
const controller = require("../controllers/product.controller");
const upload = require("../middlewares/multer");

router.get("", controller.getProducts);
router.get("/:id", controller.getProduct);
router.post("", upload.single("image"), controller.createProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);

// router.patch(

//   upload.array("images", 10),
//   productController.create
// );
module.exports = router;
