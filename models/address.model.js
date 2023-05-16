const constants = require('../utils/constants');

module.exports = (sequelize, Sequelize, User) => 
{
    const Address = sequelize.define('addresses',
    {
        id :
        {
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        user_Id :
        {
            type: Sequelize.INTEGER,
            references: 
            {
                model: User,
                key: 'id',
            },
        },
        plot_noORflat_no :
        {
            type : Sequelize.STRING,
            allowNull : false,
            required : true
        },
        street_name :
        {
            type : Sequelize.STRING,
            allowNull : false,
            required : true
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
            required : true
        },
        state :
        {
            type : Sequelize.STRING,
            allowNull : false,
            required : true
        },
        country :
        {
            type : Sequelize.STRING,
            allowNull : false,
            required : true
        },
    },
    {
        timestamps: false,
    });
    return Address;
};