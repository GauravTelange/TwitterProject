import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
import {UserRepository, TweetRepository} from './repository/index.js';
import LikeService from './services/like-service.js';


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiRoutes);

import service from './services/tweet-service.js';


app.listen(3000, async() => {
    console.log('Server Started on Port : 3000');

    //connection mongodb
    await connect();
    console.log('Mongodb Connected');

     const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();

    const tweets =  await tweetRepo.getAll(0, 10);

    const users = await userRepo.getAll();
   
    const likeService = new LikeService();

    
   console.log("Passing Tweet ID:", tweets[0]?._id);
console.log("Passing User ID:", users[0]?._id);

// const isAdded = await likeService.toggleLike(tweets._id, 'Tweet', users._id);


await likeService.toggleLike(tweets[0]._id, 'Tweet', users[0]._id);

   
    
    
    
});