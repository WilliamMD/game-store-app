const OrderRouter = require('express').Router();
const OrderController = require('../controllers/OrderController');

OrderRouter.get('/',ItemController.showOrders)
OrderRouter.post('/add',ItemController.addOrders)
OrderRouter.delete('/delete/:id',ItemController.deleteOrders)
OrderRouter.put('/update/:id',ItemController.updateOrders)

module.exports = OrderRouter;