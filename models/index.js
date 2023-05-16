// const Sequelize = require('sequelize');
// const env = process.env.NODE_ENV || 'development';
// const config = require("../configs/db.config")[env];

// require('dotenv').config();
// // const dbSettings = dbConfig[env];

// const sequelize = new Sequelize
// (
//     config.database,
//     config.user,
//     config.password,
//     {
//         host: config.host,
//         dialect: config.dialect,
//         // operatorsAliases: false,
//         pool: 
//         {
//             max : config.pool.max,
//             min : config.pool.min,
//             acquire : config.pool.acquire,
//             idle : config.pool.idle
//         }
//     }
// );

// const db = {Sequelize,sequelize};

// db.user = require('./user.model')(sequelize, Sequelize);
// db.address = require('./address.model')(sequelize, Sequelize, db.user);

// db.user.belongsToMany(db.address,
//     {
//         through : "user_address",
//         foreignKey : "address_Id",
//         otherKey : "userId"
//     });

// db.address.belongsToMany(db.user,
//     {
//         through : "user_address",
//         foreignKey : "user_Id",
//         otherKey : "address_Id"
//     });

// module.exports = db;

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../configs/db.config')[env];

require('dotenv').config();

const sequelize = new Sequelize
(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {Sequelize,sequelize};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize);
db.Address = require('./address.model')(sequelize, Sequelize, db.User);

db.User.belongsToMany(db.Address,
    {
        through: 'user_address',
        foreignKey: 'user_Id',
        otherKey: 'address_Id',
        timestamps: false // Disable timestamps for the association
    });

db.Address.belongsToMany(db.User,
    {
        through: 'user_address',
        foreignKey: 'address_Id',
        otherKey: 'user_Id',
        timestamps: false // Disable timestamps for the association
    });

module.exports = db;