const ProductRouter = require('express').Router();
const ProductController = require('../controllers/ProductController');
const {authentication} = require('../middlewares/auth')


ProductRouter.get('/',ProductController.showProducts)
ProductRouter.get('/auth',authentication,ProductController.showProductsUsers)
ProductRouter.get('/:id',ProductController.showProductsById)
ProductRouter.post('/add',ProductController.addProducts)
ProductRouter.delete('/delete/:id',ProductController.deleteProducts)
ProductRouter.put('/update/:id',ProductController.updateProducts)
ProductRouter.put('/updateViews/:id',ProductController.updateViews)
ProductRouter.put('/updateSold/:id',ProductController.updateSold)

module.exports = ProductRouter;