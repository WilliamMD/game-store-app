const ProductImageRouter = require('express').Router();
const ProductImageController = require('../controllers/ProductImageController');
const {authentication,authorization} = require('../middlewares/auth')
const upload = require('../middlewares/multer')


ProductImageRouter.get("/",ProductImageController.showImages)
ProductImageRouter.post("/upload",authentication,authorization,upload.single("file"),ProductImageController.uploadImages)
ProductImageRouter.put("/update/:id",authentication,authorization,upload.single("file"),ProductImageController.updateImages)
ProductImageRouter.delete("/delete/:id",authentication,authorization,ProductImageController.deleteImages)

module.exports = ProductImageRouter;