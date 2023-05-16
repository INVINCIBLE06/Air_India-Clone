const authController = require('../controllers/auth.controller');


module.exports = (app)=>
{
    app.post(`/flight/booking/clone/registeration`, authController.registration);
};