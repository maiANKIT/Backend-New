const express = require('express');
const noteModel = require('./models/note.model')

const app = express();

/* 

POST /notes => Create a note
GET /notes => Get all notes
DELETE /notes/:id => delete a note
PATCH /notes/:id =>update a note

*/

app.use(express.json());


//insert data inside server
app.post('/notes', async(req, res)=>{

    const data = req.body
    noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created"
    })

})

//fetch data form database

//find is use to extract all the data from database
app.get('/notes', async(req, res)=>{

    const notes =  await noteModel.find() //return array always
    // const notes = await noteModel.findOne({

    //     title: "title_title"

    // })

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })

})

app.delete('/notes/:id', async(req, res)=>{

    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "Note deleted successfully"
    })

})

app.patch('/notes/:id', async(req, res)=>{

    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({
        _id: id
    },{

        description: description

    })

    res.status(200).json({
        message: "Note updated successfully"
    })

})

module.exports = app