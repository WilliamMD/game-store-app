const LineItemRouter = require('express').Router();
const LineItemsController = require('../controllers/LineItemsController');
const {authentication,authorization} = require('../middlewares/auth')

LineItemRouter.get('/',LineItemsController.showLineItems)
LineItemRouter.get('/auth',authentication,authorization,LineItemsController.showItemsUsers)
LineItemRouter.get('/:id',LineItemsController.showItemsById)
LineItemRouter.post('/add',authentication,authorization,LineItemsController.addLineItem)
LineItemRouter.delete('/delete/:id',authentication,authorization,LineItemsController.deleteLineItem)
LineItemRouter.put('/update/:id',authentication,authorization,LineItemsController.updateLineItem)

module.exports = LineItemRouter;