const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');


app.listen(3000, async() => {
    console.log('Server Started on Port : 3000');
    

    //connection mongodb
    await connect();
    console.log('Mongodb Connected');
    
    // const tweet = await Tweet.create({
    //     content : 'second Tweet',
    //     userEmail: "gt@gmail.com"
    // });
    const tweetRepo = new TweetRepository();
  
    
    const tweet = await tweetRepo.getWithComments('69e20379237f29b8567d771a');
  
    console.log(tweet);
    
    
});