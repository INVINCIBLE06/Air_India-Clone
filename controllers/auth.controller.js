const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../models');
const config = require('../configs/auth.config');
const fetch = require('../helper/commonFetching');

const User = db.user;
const Add = db.address


exports.registration = async (req, res) => 
{
    try
    {
        let user_data = 
        {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            contact_no: req.body.contact_no,
            password: req.body.password,
            date_of_birth: req.body.date_of_birth,
        };
        
        const user = await User.create(user_data);
        
        if(user)
        {
            console.log(`#### New User '${user.name}' created ####`);
            let id = await fetch.userDetailsByEmail(req.body.email);
            let address_data = 
            {
                house_no: req.body.house_no,
                street_name: req.body.street_name,
                city: req.body.city,
                district: req.body.district,
                state: req.body.state,
                country: req.body.country,
            };
            const address = await Add.create(address_data);
            if(address)
            {
                console.log(`#### '${user.name}' address has been added in the database ####`);
                await user.addAddress
                ({
                    userId : user.id,
                    addressId : address.id
                }); // Add the association between user and address
                console.log(`#### Association between '${user.name}' and the address has been created ####`);
            }
            else
            {
                console.log(`#### Failed to add the address of new user '${user.name}' ####`);
            }
        }
        else
        {
            console.log('#### Failed to create a new user ####');
        }
    }
    catch(error)
    {
      console.log('Error during registration:', error);
      // Handle the error and send an appropriate response
    }
};
  