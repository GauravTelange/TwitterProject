const express = require('express');
const connect = require('./config/database');
const {TweetRepository}  = require('./repository/index');
const TweetService = require('./services/tweet-service');

const app = express();

 
app.listen(3000, async() => {
    console.log('Server Started on Port : 3000');

    //connection mongodb
    await connect();
    console.log('Mongodb Connected');
    

    let service = new  TweetService();

    const tweet = await service.create({content: 'Good #morning'});

    console.log(tweet);  
    
    
    
});