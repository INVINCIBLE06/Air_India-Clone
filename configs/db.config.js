require('dotenv').config();

module.exports = 
{
    development :
    {
        host : process.env.host,
        user : process.env.user,
        password : process.env.dbpassword,
        database : process.env.database,
        dialect : process.env.dialect,    
        
        pool : 
        {
            max : 5,
            min : 0,
            acquire : 30000,
            idle : 10000
        }

    },
}