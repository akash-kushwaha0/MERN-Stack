const mongoose = require('mongoose');
// const mongoURL = 'mongodb://localhost:27017';
const mongoURL = 'mongodb://192.168.43.1/';

const connectToMongo =()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Connected Successfully");
    })
}
mongoose.set('strictQuery', false);
module.exports = connectToMongo