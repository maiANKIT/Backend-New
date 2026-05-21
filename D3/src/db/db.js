const mongoose = require("mongoose");

async function connectDB(){

    await mongoose.connect("mongodb+srv://yt:eNCzK0aUsEES2yW5@yt-complete-backend.5y1shuv.mongodb.net/halley")

    console.log("connected to db")

}

module.exports = connectDB;