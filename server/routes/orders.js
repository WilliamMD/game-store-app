const OrderRouter = require('express').Router();
const OrderController = require('../controllers/OrderController');
const {authentication,authorization} = require('../middlewares/auth')

OrderRouter.get('/',OrderController.showOrders)
OrderRouter.get('/auth',authentication,authorization,OrderController.showOrdersUsers)
OrderRouter.get('/:id',OrderController.showOrdersById)
OrderRouter.post('/add',authentication,authorization,OrderController.addOrders)
OrderRouter.delete('/delete/:id',authentication,authorization,OrderController.deleteOrders)
OrderRouter.put('/update/:id',authentication,authorization,OrderController.updateOrders)
OrderRouter.put('/updateStatus/:id',authentication,authorization,OrderController.updateStatus)

module.exports = OrderRouter;