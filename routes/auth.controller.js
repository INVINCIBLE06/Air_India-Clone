const authController = require('../controllers/auth.controller');
const {verifyBody} = require('../middlewares')


module.exports = (app)=> 
{
    app.post(`/flight/booking/clone/registeration`, [verifyBody.ValueEnteredCheck, verifyBody.ValidateSignUpRequestBody, verifyBody.DuplicateValueCheck], authController.registration);
    app.post(`/flight/booking/clone/login`,authController.login);
};