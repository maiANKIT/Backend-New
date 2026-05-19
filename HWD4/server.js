const express = require('express');
const app = express();
const db = require('./db');
const person = require('./models/person')

const bodyParser = require('body-parser'); //ye kisi bhi data k form ko change kr k ek required form de change kr k de jiski wajah se hme different different data type ko alag se deal krne ki jarurat nhi padti
app.use(bodyParser.json());


 
app.get('/', (req, res)=>{
    res.send('Welcome to my hotel... How I can help you?')
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})