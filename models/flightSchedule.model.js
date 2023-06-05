const constants = require('../utils/constants');

module.exports = (sequelize, Sequelize, User) => 
{
    const Schedule = sequelize.define('schedules',
    {
        id :
        {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        airline :
        {
            type : Sequelize.STRING,
            required : true
        },
        airportName :
        {
            type : Sequelize.STRING,
            required : true
        },
        origin :
        {
            type : Sequelize.STRING,
            required : true
        },
        destination :
        {
            type : Sequelize.STRING,
            required : true
        },
        price :
        {
            type : Sequelize.STRING,
            required : true
        },
        boardingTime :
        {
            type : Sequelize.STRING,
            required : true
        },
        departureTime :
        {
            type : Sequelize.STRING,
            required : true
        },
        arrivalTime :
        {
            type : Sequelize.STRING,
            required : true
        }
    },
    {
        timestamps: false,
    });
    return Schedule;
}