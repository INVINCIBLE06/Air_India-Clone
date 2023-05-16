const constants = require('../../QRCode/utils/constants');

module.exports = (sequelize, Sequelize) => 
{
    const Email_Verified = sequelize.define("email_verified",
    {
        id : 
        {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        email :
        {
            type : Sequelize.STRING,
            unique : true,
            allowNull : false
        },
        email_verified :
        {
            type : Sequelize.ENUM(constants.email_status.verified,  constants.email_status.not_verified),
            allowNull : false
        },
        email_entered_at :
        {
            type : Sequelize.DATE,
            immutable : true,
            defaultValue : () => { return Date.now() } 
        },
        email_verified_at :
        {
            type : Sequelize.DATE,
            defaultValue : () => { return Date.now() }
        }
    },
    {
        timestamps: false,
    });    
    return Email_Verified;
};