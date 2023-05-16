const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../models');
const config = require('../configs/auth.config');
const fetch = require('../helper/commonFetching');

const User = db.user;
const Add = db.address


exports.registration = async (req, res) =>
{
    let user_data =
    {
        name : req.body.name,
        username : req.body.username,
        email : req.body.email,
        contact_no : req.body.contact_no,
        password : req.body.password,
        date_of_birth : req.body.date_of_birth
    }
    // console.log(user_data);
    const user = await User.create(user_data);

    if(user) 
    {
        console.log(`#### New User '${user.name}' created ####`);
    }
    else
    {
        console.log('#### Failed to create a new user ####');
    }

    let id = await fetch.userDetailsByEmail(req.body.email);
    
    console.log("Here :- ", id.users.dataValues.id); 
     
    let address_data = 
    {
        plot_noORflat_no : req.body.plot_noORflat_no,
        street_name : req.body.street_name,
        user_Id	: id,
        city : req.body.city,
        district : req.body.district,
        state : req.body.state,
        country : req.body.country
    }
    // console.log(user_data);
    const add = await Add.create(address_data);
    
    if(address_data)
    {
        console.log(`#### '${user.name}' address have been added in the database ####`);
    }
    else
    {
        console.log(`#### Failed to add the address of new user '${user.name}' ####`);
    }
};