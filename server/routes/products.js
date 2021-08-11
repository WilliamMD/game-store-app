const ProductRouter = require('express').Router();
const ProductController = require('../controllers/ProductController');

ProductRouter.get('/',ProductController.showProducts)
ProductRouter.post('/add',ProductController.addProducts)
ProductRouter.delete('/delete/:id',ProductController.deleteProducts)
ProductRouter.put('/update/:id',ProductController.updateProducts)

module.exports = ProductRouter;