const express = require('express'); // Importing the node express library

const app = express(); // Intitalizing the app variable with the express library function
const db = require("./models");
const bodyParser = require('body-parser');
const init = require('./init');

db.sequelize.sync({ force: false }).then(() =>  
{
    console.log('tables dropped and recreated');
    // init();
});

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

require('./routes/auth.controller')(app);

module.exports = app;