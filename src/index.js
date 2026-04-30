import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import dotenv from 'dotenv';

import {connect} from './config/database.js';
import { passportAuth } from './config/jwt-middleware.js'
import apiRoutes from './routes/index.js';

import service from './services/tweet-service.js';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

// Add this line before app.use('/api', apiRoutes);
app.get('/', (req, res) => {
    res.json({
        message: 'Twitter API is live! 🚀',
        version: '1.0.0',
        author: 'Gaurav Telange',
        github: 'https://github.com/GauravTelange/TwitterProject',
        endpoints: {
            tweets: '/api/v1/tweets',
            likes: '/api/v1/likes',
            comments: '/api/v1/comments'
        }
    });
});
app.use('/api',apiRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, async() => {
    console.log('Server Started on Port : 3000');

    //connection mongodb
    await connect();
    console.log('Mongodb Connected');   
});