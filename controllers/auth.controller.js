const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../configs/auth.config');
const fetch = require('../helper/commonFetching');
const User = db.user; 
const Add = db.address;

exports.registration = async (req, res) =>  
{
    try
    {
        let user_data = 
        {
            name : req.body.name,
            username : req.body.username.toLowerCase(),
            email : req.body.email,
            contact_no : req.body.contact_no,
            password : bcrypt.hashSync(req.body.password, 8),
            date_of_birth : req.body.date_of_birth,
        };
        const user = await User.create(user_data);        
        if(user)
        {
            console.log(`#### New User '${user.email}' created ####`);
            let uid = await fetch.userDetailsByEmail(req.body.email);
            // console.log("Here :- ", id)
            let address_data = 
            {
                user_Id : user.dataValues.id, 
                house_no: req.body.house_no,
                street_name: req.body.street_name,
                city: req.body.city,
                district: req.body.district,
                state: req.body.state,
                pin_code : req.body.pin_code, 
                country: req.body.country,
            };
            const address = await Add.create(address_data);
            if(address)
            {
                console.log(`#### '${user.name}' address has been added in the database ####`);                
                // let aid = await fetch.addressDetailsByid(user.dataValues.id); 
                let junctionTable = await user.addAddress(address);
                if (!junctionTable) 
                {
                    // Handle if junctionTable addition fails
                    console.log(`#### Failed to add data into the junction table with user '${user.email}' ####`);
                    res.status(500).send
                    ({
                        message : "Internal Server error"
                    });
                }
                else
                {
                    // Handle if junctionTable addition is successful
                    console.log(`#### Data added in the junction table with user '${user.email}' successfully ####`);
                    res.status(200).send
                    ({
                        message : "User registered successfully"
                    }); 
                }
            }
            else 
            {
                console.log(`#### Failed to add the address of new user '${user.email}' ####`);
            }
        }
        else
        {
            console.log('#### Failed to create a new user ####');
        }
    }
    catch(error)
    {
      console.log('Error during registration:', error); // Handle the error and send an appropriate response
    }
};


exports.login = async (req, res) =>
{
    const { username, email, contact_no, password } = req.body;
    let condition = null;
    if(username)
    {
        condition = { username: username };
    }
    else if(email)
    {
        condition = { email: email };
    }
    else if(contact_no)
    {
        condition = { contact_no: contact_no };
    }
    else
    {
        return res.status(400).send
        ({ 
            message: "Invalid login credentials" 
        });
    }
    User.findOne
    ({
        where : condition
    })
    .then(user =>
        {
            if(!user)
            {
                return res.status(404).send
                ({
                    message : "User Not found"
                });
            }
            var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
            if(!isValidPassword)
            {
                return res.status(401).send 
                ({
                    message : "Invalid Password"
                });
            }
            else
            {
                return res.status(200).send 
                ({
                    message : "Login Successfully Done"
                });
            }
        });
}  

