// import mongoose from 'mongoose';

// export const connect = async () => {
//     await mongoose.connect('mongodb://localhost/twitter_Dev');
// }

import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect(process.env.MONGO_URI);
}