//this file contain the data on person what  should we take from them

const mongoose = require('mongoose');

//Define person schema

const personSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true   //true means without entering name we cannot process further
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum:['chef', 'waiter', 'manager'], //enum use ho rha kyuki hm bs inhi tin value me se choose kr skte otherwise wo value nhi lega
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{

        type: String,
        required: true,
        unique: true //unique here confirms that only one email can be use

    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    }

});

//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;