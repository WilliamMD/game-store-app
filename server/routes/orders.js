const OrderRouter = require('express').Router();
const OrderController = require('../controllers/OrderController');

OrderRouter.get('/',OrderController.showOrders)
OrderRouter.get('/:id',OrderController.showOrdersById)
OrderRouter.post('/add',OrderController.addOrders)
OrderRouter.delete('/delete/:id',OrderController.deleteOrders)
OrderRouter.put('/update/:id',OrderController.updateOrders)
OrderRouter.put('/updateStatus/:id',OrderController.updateStatus)

module.exports = OrderRouter;