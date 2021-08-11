const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');

UserRouter.get('/',UserController.showUsers)
UserRouter.post('/register',UserController.registerUsers)
UserRouter.post('/login',UserController.loginUsers)
UserRouter.delete('/delete/:id',UserController.deleteUsers)
UserRouter.put('/update/:id',UserController.updateUsers)



module.exports = UserRouter ;