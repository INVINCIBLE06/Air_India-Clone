const constants = require('../utils/constants');

module.exports = (sequelize, Sequelize) =>
{
    const User = sequelize.define('users',
    {
        id : 
        {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name :
        {
            type : Sequelize.STRING,
            required : true
        },
        username :
        {
            type : Sequelize.STRING,
            required : true
        },
        email :
        {
            type : Sequelize.STRING,
            allowNull : false,
            required : true
        },
        contact_no :
        {
            type : Sequelize.STRING,
            allowNull : false,
            required : true
        },
        password : 
        {
            type : Sequelize.STRING,
            allowNull : false,
            required : true
        },
        date_of_birth : 
        {
            type : Sequelize.STRING,
            required : true,
            allowNull : false
        },
        created_on :
        {
            type : Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            immutable : true,
            //// defaultValue : () => 
            //                     {
            //                         return Date.now();
            //                     } 
        },
        updated_on :
        {
            type : Sequelize.DATE,
            defaultValue: Sequelize.NOW
            // // defaultValue : () => 
            //                     {
            //                         return Date.now();
            //                     }
        },
        emailVerified: 
        {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },          
    },
    {
        timestamps: false,
    });
    return User;
};