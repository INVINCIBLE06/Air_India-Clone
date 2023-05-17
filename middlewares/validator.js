const db = require("../models");
const fetch = require('../helper/commonFetching');
User = db.user;

IsValidDateOfBirth = (DOB) => 
{
    return DOB.match("/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/");
};
 
IsValidPassword = (Password) => 
{
    return Password.match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/");
}

IsValidEmail = (Email) => 
{
    return String(Email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); 
}

IsValidContact_No = (Contact_No) => 
{
    return Contact_No.match("/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/");
}

const ValueEnteredCheck = (req, res) => 
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

const ValidateSignUpRequestBody = async (req, res, next) =>
{
    try
    {        
        if(IsValidEmail(req.body.email))
        {
            return res.status(400).send
            ({
                message : "Email is not in correct format. Please write a email in correct form"
            }); 
        }
        else if(!IsValidPassword(req.body.password))
        {
            return res.status(400).send
            ({
                message : "Failed ! Not a valid password. Password must be 8 to 12 character containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
            });
        }
        else if(!IsValidContact_No(req.body.contact_no))
        {
            return res.status(400).send
            ({
                message : "The contact number is not in the correct format"
            });
        }
        else if(IsValidDateOfBirth(req.body.date_of_birth))
        {
            return res.status(400).send
            ({
                message : "The date of birth is not valid. Please enter the enter in this format YYYY/MM/DD" 
            });
        }
    }
    catch(err)
    {
        console.log(" #### Error while validation user signup attributes like date of birth, password, contact number, confirm password, and email #### ", err.message);
        res.status(500).send
        ({
            message : "Internal server error while validation user signup attributes like date of birth, password, contact number, confirm password, and email"
        });
    }
};

const DuplicateValueCheck = async(req, res) =>
{
    try
    {
        const email = await fetch.userDetailsByEmail(req.body.email)
        if(!email)
        {
            console.log("### username is not available. Please check some other ###");
            res.status(400).send
            ({
                message : " Internal server error username is not available. Please check some other"
            });
        }
        const contact_no = await fetch.userDetailsByContactNo(req.body.contact_no)
        if(!contact_no)
        {
            console.log(" ### Someone already having this contact number. Please check once again ###");
            res.status(400).send
            ({
                message : " Internal server error someone already having this contact number. Please check once again"
            });  
        }
    }
    catch(error)
    {
        console.log(" #### Error while checking the duplicate values #### ", err.message);
        res.status(500).send
        ({
            message : "Internal servor error while checking the duplicte values"
        })
    }
};