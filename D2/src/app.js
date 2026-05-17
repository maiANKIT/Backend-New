//app.js ka kaam h server banana so
const express = require('express');

const app = express();

//middle ware
//express.json(); //it is a middle ware

app.use(express.json()); //raw data ko express k readable format me change kr deta h

const notes = [];

app.post('/notes', (req, res)=>{

    notes.push(req.body)
    res.status(201).json({
        message: "note created successfully"
    })

})

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "notes fetch successfully",
        notes: notes
    })
})

module.exports = app;