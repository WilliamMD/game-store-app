const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');
const upload = require('../middlewares/multer')

UserRouter.get('/',UserController.showUsers)
UserRouter.post('/register',upload.single("avatar"),UserController.registerUsers)
UserRouter.post('/login',UserController.loginUsers)
UserRouter.delete('/delete/:id',UserController.deleteUsers)
UserRouter.put('/update/:id',upload.single("avatar"),UserController.updateUsers)



module.exports = UserRouter ;