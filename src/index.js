import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';


import {connect} from './config/database.js';
import { passportAuth } from './config/jwt-middleware.js'
import apiRoutes from './routes/index.js';


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);


app.use('/api',apiRoutes);

import service from './services/tweet-service.js';

const PORT = process.env.PORT || 3000;

app.listen(3000, async() => {
    console.log('Server Started on Port : 3000');

    //connection mongodb
    await connect();
    console.log('Mongodb Connected');   
});