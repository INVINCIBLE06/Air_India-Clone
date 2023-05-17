const db = require("../models");
const fetch = require('../helper/commonFetching');
User = db.user;


const ValueEnteredCheck = (req, res, next) => 
{
    try
    {
        if(!req.body.name)
        {
            return res.status(400).send
            ({
                message : "Name is not provided. It is required for signup"
            });
        }
        else if(!req.body.username)
        {
            return res.status(400).send
            ({
                message : "username is not provide. It is required for signup"
            });
        }
        else if(!req.body.email)
        {
            return res.status(400).send
            ({
                message : "Email id is not provided. It is required for signup"
            });
        }
        else if(!req.body.contact_no)
        {
            return res.status(400).send
            ({
                message : "Contact number is not provided. It is required for signup"
            });
        }
        else if(!req.body.password)
        {
            return res.status(400).send
            ({
                message : "Password is not provided. It is required for signup"
            });
        }
        else if(!req.body.date_of_birth)
        {
            return res.status(400).send
            ({
                message : "Date of birth is not provided. It is required for signup"
            });
        }
        else if(!req.body.house_no)
        {
            return res.status(400).send
            ({
                message : "house_no is not provided. It is required for signup"
            });
        }
        else if(!req.body.street_name)
        {
            return res.status(400).send
            ({
                message : "street_name is not provided. It is required for signup"
            });
        }        
        else if(!req.body.city)
        {
            return res.status(400).send
            ({
                message : "city is not provided. It is required for signup"
            });
        }
        else if(!req.body.district)
        {
            return res.status(400).send
            ({
                message : "district is not provided. It is required for signup"
            });
        }
        else if(!req.body.state)
        {
            return res.status(400).send
            ({
                message : "State name is not provided. It is required for signup"
            });
        }
        else if(!req.body.country)
        {
            return res.status(400).send
            ({
                message : "Country name is not provided. It is required for signup"
            });
        }
        else
        {
            next();
        }
    }
    catch(err)
    {
        console.log(" #### Error while checking the value entered function #### ");
        res.status(500).send
        ({
            message : "Internal Server error while checking the value entered"
        });
    }
};

const isValidDateOfBirth = (DOB) =>  
{
    return DOB.match(/^(?:19|20)\d{2}[/-](?:0[1-9]|1[0-2])[/-](?:0[1-9]|[12][0-9]|3[01])$/);
};

isValidPassword = (password) => 
{
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,12}$/.test(password);
}

const isValidContact_No = (Contact_No) => 
{
    return Contact_No.match(/^(\+?91|0)?[6-9]\d{9}$/);
}

const isValidUsername = (username) => 
{
    return username.match(/^[a-zA-Z0-9]{8,12}$/);
}

const customUsernameGenerate = async (name) =>
{
    let sanitizedName = name.replace(/\s/g, ''); // Remove spaces from the name
    let formattedName = sanitizedName.substring(0, 4); // Take the first 4 characters
    if(formattedName.length < 4) 
    {
        formattedName = formattedName.padEnd(4, 'x'); // Add 'x' characters if the name is less than 4 characters
    }
    const randomDigits = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    const username = formattedName + randomDigits; // Concatenate the name and random number
    console.log('Customize username :- ', username)
    let checkGeneratedUsername = await fetch.userDetailsByUserName(username)
    console.log("customUsernameGenerate :- ", checkGeneratedUsername);
    if(checkGeneratedUsername == null)
    {
        return username;       
    }
    else
    {
        customUsernameGenerate(name);
    }
};

isValidEmail = (email) => 
{
    //return String(Email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
    const regex = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?$/);    
    if (regex.test(email))
    {
        const domain = email.split('@')[1]; // get domain name after '@' symbol
        const domainParts = domain.split('.'); // split domain name by '.' separator
        //console.log(domainParts); // output: ['gmail', 'com', 'com']
        if(domainParts[1] === domainParts[2])
        {
            // console.log('False');
            // console.log('Invalid Email');
            return false;
        }
        else
        {
            // console.log('true');
            // console.log('Valid Email');
            return true;
        }
    }
    else
    {
        // console.log('False');
        return false;
    }
}
 
const ValidateSignUpRequestBody = async (req, res, next) =>
{
    try
    {
        if(isValidEmail(req.body.email) != true)
        {
            return res.status(400).send
            ({
                message : "Email is not in correct format. Please write a email in correct form"
            }); 
        }
        else if(!isValidPassword(req.body.password))
        {
            console.log(!!isValidPassword(req.body.password)); 
            return res.status(400).send
            ({
                message : "Failed ! Not a valid password. Password must be 8 to 12 character containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
            });
        }
        else if(!isValidContact_No(req.body.contact_no))
        {
            console.log(!!isValidContact_No(req.body.contact_no)); 
            return res.status(400).send
            ({
                message : "The contact number is not in the correct format"
            });
        }
        else if(!isValidDateOfBirth(req.body.date_of_birth))
        {
            console.log(!!isValidDateOfBirth(req.body.date_of_birth));
            return res.status(400).send
            ({
                message : "The date of birth is not valid. Please enter the enter in this format YYYY/MM/DD" 
            });
        }
        else if(!isValidUsername(req.body.username))
        {
            console.log(!!isValidUsername(req.body.username));
            return res.status(400).send
            ({
                message : "username is not valid. It must consist atleat 8 letter and less than 16 letters" 
            });
        }
        else
        {
            next();
        }
    }
    catch(err)
    {
        console.log(" #### Error while validation user signup attributes like date of birth, password, contact number, confirm password, and email #### ", err.message);
        return res.status(500).send
        ({
            message : "Internal server error while validation user signup attributes like date of birth, password, contact number, confirm password, and email"
        });
    }
};

const DuplicateValueCheck = async(req, res, next) =>
{
    try
    {
        const email = await fetch.userDetailsByEmail(req.body.email); 
        if(email)
        {
            console.log("#### This email is already registered. Please check once again ####");
            return res.status(400).send
            ({
                message : " Internal server error this email is already registered. Please check once again"
            });
        }
        const contact_no = await fetch.userDetailsByContactNo(req.body.contact_no)
        if(contact_no)
        {
            console.log(" ### Someone already having this contact number. Please check once again ###");
            return res.status(400).send
            ({
                message : " Internal server error someone already having this contact number. Please check once again"
            });  
        }
        const username = await fetch.userDetailsByUserName(req.body.username);
        if(username)
        {
            console.log(" ### Someone already having this username. Please check once again ###");
            let usernames = [];
            // let usernames = await customUsernameGenerate(req.body.name);
            // console.log(usernames);
            for (let i = 0; i < 3; i++)
            {
                const username = await customUsernameGenerate(req.body.name);
                usernames.push(username);
            }
            // console.log(usernames);
            return res.status(400).send 
            ({
                message : " Internal server error someone already having this username. You can select one of the three username",
                usernames : usernames
            });  
        }
        else
        {
            next();
        }
    }
    catch(error)
    {
        console.log(" #### Error while checking the duplicate values #### ", err.message);
        res.status(500).send
        ({
            message : "Internal servor error while checking the duplicte values"
        });
    }
};

const verifyRequestBodiesForAuth = 
{
    ValueEnteredCheck,
    DuplicateValueCheck,
    ValidateSignUpRequestBody
};

module.exports = verifyRequestBodiesForAuth