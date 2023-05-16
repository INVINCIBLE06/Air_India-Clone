const db = require('../models');
const User = db.user;

exports.userDetailsByEmail = async (email) => 
{
    try
    {
        const details = await User.findOne
        ({
            where:
            {
                email : email
            }
        });

        if (!details) 
        {
            console.log(`#### No user found with this email ####`);
        }
        // console.log("Fetching :- ", details)
        return details;
    }
    catch (error)
    {
        console.log('Error retrieving user details:', error);
        throw error;
    }
};
