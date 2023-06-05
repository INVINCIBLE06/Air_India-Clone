const constants = require('../utils/constants');


module.exports = (sequelize, Sequelize, User) => 
{
    const Airport = sequelize.define('airports',
    {
        id : 
        {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        state :
        {
            type : Sequelize.STRING,
            required : true
        },
        city :
        {
            type : Sequelize.STRING,
            required : true
        },
        airportName :
        {
            type : Sequelize.STRING,
            required : true 
        },
        iataCode :
        {
            type : Sequelize.STRING,
            required : true 
        },
        icaoCode :
        {
            type : Sequelize.STRING,
            required : true 
        },
    },
    {
        timestamps: false,
    });
    return Airport;
}