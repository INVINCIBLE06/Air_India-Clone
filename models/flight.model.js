const constants = require('../utils/constants');

module.exports = (sequelize, Sequelize) =>
{
    const Flight = sequelize.define('bookings',
    {
        from : Sequelize.STRING,
        to : Sequelize.STRING,
        date : Sequelize.STRING,
        airline : Sequelize.STRING,
        fromTime : Sequelize.STRING,
        toTime : Sequelize.STRING,
        group : Sequelize.STRING,
        passengerCount : Sequelize.INTEGER,
        price : Sequelize.INTEGER
    },
    {
        timestamps: false,
    });
    return Flight; 
}