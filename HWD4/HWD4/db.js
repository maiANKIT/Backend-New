const mongoose = require('mongoose'); //for db hme sbse phle mongoose ko require krna hota h

const mongoURL = 'mongodb://127.0.0.1:27017/hotels';


 //hotel is database name which will be create if not exist


//it is compulsory to write other wise system might crash or give warning

//set up connection
mongoose.connect(mongoURL);

//get default connection
//mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;

//define event listeners for database connection

db.on('connected', ()=>{
    console.log('connected to mongoDB server');
})

db.on('error', (err)=>{

    console.log('MongoDB connection error: ', err);

})

db.on('disconnected', ()=>{

    console.log('MongoDB Disconnected');

})

//export database connection
module.exports = db;