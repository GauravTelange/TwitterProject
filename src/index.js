const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Tweet = require('./models/tweet');

 
app.listen(3000, async() => {
    console.log('Server Started on Port : 3000');

    //connection mongodb
    await connect();
    console.log('Mongodb Connected');
    
    const tweets = await Tweet.find({
        content: ["First Tweet" , "Gaurav Telange", "SMit"]
        
    });

    console.log(tweets);
    
    
});