const db = require('./models');
require('dotenv').config();
const User = db.user

module.exports = async () =>
{
    try
    {
        User.bulkCreate().then(() =>
        {
            console.log(" #### Users table is Succeessfully Created #### ")
        }).catch((err) => 
            {
                console.log(" #### Error while creating the users table #### ", err.message)
            });
    }
    catch(err)
    {
        console.log(" #### Error while creating the user table **** ", err.message)
    }
};