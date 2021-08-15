const ShoppingCartsRouter = require('express').Router();
const ShoppingCartController = require('../controllers/ShoppingCartController');
const {authentication,authorization} = require('../middlewares/auth')

ShoppingCartsRouter.get('/',ShoppingCartController.showCarts)
ShoppingCartsRouter.get('/auth',authentication,authorization,ShoppingCartController.showCartsUsers)
ShoppingCartsRouter.get('/:id',ShoppingCartController.showCartsById)
ShoppingCartsRouter.post('/add',authentication,authorization,ShoppingCartController.addCarts)
ShoppingCartsRouter.delete('/delete/:id',authentication,authorization,ShoppingCartController.deleteCarts)
ShoppingCartsRouter.put('/update/:id',authentication,authorization,ShoppingCartController.updateCarts)

module.exports = ShoppingCartsRouter;