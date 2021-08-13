const LineItemRouter = require('express').Router();
const LineItemsController = require('../controllers/LineItemsController');
const {authentication} = require('../middlewares/auth')

LineItemRouter.get('/',LineItemsController.showLineItems)
LineItemRouter.get('/auth',authentication,LineItemsController.showItemsUsers)
LineItemRouter.get('/:id',LineItemsController.showItemsById)
// LineItemRouter.post('/add',authentication,LineItemsController.addProducts)
// LineItemRouter.delete('/delete/:id',authentication,LineItemsController.deleteProducts)
// LineItemRouter.put('/update/:id',authentication,LineItemsController.updateProducts)

module.exports = LineItemRouter;