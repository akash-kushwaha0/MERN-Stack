const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/?directConnection=true';

const connectToMongo =()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("connected successfully");
    })
}
mongoose.set('strictQuery', false);
module.exports = connectToMongo