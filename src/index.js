const express = require('express');
const connect = require('./config/database');
const app = express();

app.listen(3000, async() => {
    console.log('Server Started on Port : 3000');

    //connection mongodb
    await connect();
    console.log('Mongodb Connected');
    

   
    
    
    
});