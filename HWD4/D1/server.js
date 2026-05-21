//to use express we first have to require it so
const express = require('express');

const app = express();

app.get('/', (req, res)=>{

    res.send("Hello World");

});

app.get('/About', (req, res)=>{

    res.send("About Page");

});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});