const {Router} = require('express');
const{register, login, sendResetPassword,} = require('../controller/user.controller')

const userRouter = Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/send_reset_pasword', sendResetPassword);


module.exports = userRouter;



