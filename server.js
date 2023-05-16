const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () =>
{
    console.log("Server Started Running on the port number -", process.env.PORT)
});