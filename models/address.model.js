const constants = require('../../QRCode/utils/constants');

module.exports = (sequelize, Sequelize) => 
{
    const Address = sequelize.define('addresses',
    {
        id :
        {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        plot_noORflat_no :
        {
            type : Sequelize.STRING,
            allowNull : false,
        },
        street_name :
        {
            type : Sequelize.STRING,
            allowNull : false,
        },
        city :
        {
            type : Sequelize.STRING,
            allowNull : false,
        },
        district :
        {
            type : Sequelize.STRING,
            allowNull : false,
        },
        state :
        {
            type : Sequelize.STRING,
            allowNull : false,
        },
        country :
        {
            type : Sequelize.STRING,
            allowNull : false,
        },
    },
    {
        timestamps: false,
    });

    return Address

};