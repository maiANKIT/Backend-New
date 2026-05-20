const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/person')
const MenuItem = require('./models/Menu')

const bodyParser = require('body-parser'); //ye kisi bhi data k form ko change kr k ek required form de change kr k de jiski wajah se hme different different data type ko alag se deal krne ki jarurat nhi padti
app.use(bodyParser.json());


 
app.get('/', (req, res)=>{
    res.send('Welcome to my hotel... How I can help you?')
})


//this is old method thats why i comment out so lets practice with new method where use try and catch and async and await

// app.post('/person', (req, res)=>{

//     const data = req.body //assuming the request body contains the person data

//     const newPerson = new Person(data) //assuming the request body contains the person data

//     // newPerson.name = data.name;
//     // newPerson.age = data.age;
//     // newPerson.mobile = data.mobile;
//     // newPerson.email = data.email;
//     // newPerson.address = data.address; //this is too long if we write

//     //save the new person to the database
//     newPerson.save((error, person)=>{
//         if(error){
//             console.log('Error saving person', error);
//             res.status(500).json({error: 'Internal server error'})
//         }
//         else{
//             console.log('data saved successfully');
//             res.status(200).json(savedPerson)
//         }
//     })

// })

//async: is designed asyncronous


app.post('/person', async(req, res)=>{

    try{

        const data = req.body //assuming the request body contains the person data

        //create a new person document using the mongoose model
        const newPerson = new Person(data);

        //save the new person to the database
        const response = await newPerson.save();

        console.log('data saved');
        res.status(200).json(response);

    }
    catch(err){
        //if above is failed i mean data is not saved then it will automatically catched in this
        console.log(err);
        res.status(500).json({error: 'Internal server error'});

    }

})

app.get('/person', async(req, res)=>{

    try{

        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }

})

app.post('/menu', async(req, res)=>{

    try{

        const data = req.body;

        const NewMenu = new MenuItem(data);

        const response = await NewMenu.save();

        console.log('New Menu is saved');

        res.status(200).json(response);

    }
    catch{

        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }

})

app.get('/menu', async(req, res)=>{

    try{
        
        const data = await MenuItem.find();

        console.log('data is fetched');

        res.status(200).json(data);

    }
    catch{

        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }

})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})