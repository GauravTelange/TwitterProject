import express from 'express';
import {connect} from './config/database.js';
const app = express();

import service from './services/tweet-service.js';


app.listen(3000, async() => {
    console.log('Server Started on Port : 3000');

    //connection mongodb
    await connect();
    console.log('Mongodb Connected');
    
    let ser= new service();

    await ser.create({content: 'Done with #refactor'});

   
    
    
    
});