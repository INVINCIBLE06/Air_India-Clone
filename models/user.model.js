const { sequelize, Sequelize } = require('../../CRM_Bug-Tracker_Conversation-system/models');
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
        }
    });
};