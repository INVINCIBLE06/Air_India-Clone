const db = require('../models');
const User = db.user;
const Add = db.address

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
        console.log('Error retrieving user details on the basis fo email:', error);
        throw error;
    }
};

exports.userDetailsByContactNo = async (phone_number) => 
{
    try
    {
        const details = await User.findOne
        ({
            where:
            {
                contact_no : phone_number
            }
        });

        if (!details) 
        {
            console.log(`#### No user found with this phone_number ####`);
        }
        // console.log("Fetching :- ", details)
        return details;
    }
    catch (error)
    {
        console.log('Error retrieving user details on the basis of phone_number:', error);
        throw error;
    }
};

exports.addressDetailsByid = async (id) =>
{
    try 
    {
        const Addressdetails = await Add.findOne
        ({
            where:
            {
                user_Id : id
            }
        });

        if(!Addressdetails)
        {
            console.log(`#### No address found with this user Id ####`);
        }

        // console.log("Fetching Address :- ", Addressdetails)
        return Addressdetails;
    }
    catch(error)
    {
        console.log('Error retrieving address details:', error);
        throw error;
    }
};