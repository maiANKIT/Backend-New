const express = require('express');
const app = express();
const db = require('./db');
const person = require('./models/person')

const bodyParser = require('body-parser'); //ye kisi bhi data k form ko change kr k ek required form de change kr k de jiski wajah se hme different different data type ko alag se deal krne ki jarurat nhi padti
app.use(bodyParser.json());


 
app.get('/', (req, res)=>{
    res.send('Welcome to my hotel... How I can help you?')
})

app.post('/person', (req, res)=>{

    const data = req.body //assuming the request body contains the person data

    const newPerson = new Person(data) //assuming the request body contains the person data

    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.mobile = data.mobile;
    // newPerson.email = data.email;
    // newPerson.address = data.address; //this is too long if we write

    //save the new person to the database
    newPerson.save((error, person)=>{
        if(error){
            console.log('Error saving person', error);
            res.status(500).json({error: 'Internal server error'})
        }
        else{
            console.log('data saved successfully');
            res.status(200).json(savedPerson)
        }
    })

})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})