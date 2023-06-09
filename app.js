const express = require('express'); // Importing the node express library

const app = express(); // Intitalizing the app variable with the express library function
const db = require("./models");
const bodyParser = require('body-parser');
const init = require('./init');

// force : false --> It will not delete all the tables
// force : true --> It will delete all the tables 

db.sequelize.sync({force : true}).then(() => 
{
    console.log('#### Tables dropped and recreated #### ');
    init();
}).catch((error) =>
{
    console.error("Error deleting table:", error);
});

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

require('./routes/auth.controller')(app);

module.exports = app; 