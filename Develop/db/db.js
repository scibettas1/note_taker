const fs = require("fs");
const express = require('express');


//look at hot restaurants
//use fs write and read
//write adds to json string
//use json parse for reading the file
//stringify to write the file
//notes need ids
//loop through the array

module.exports = function(app) {
app.post('/api/notes', function (req, res) {
    const newTitle = req.body.title;
    const newText = req.body.text;
    console.log(newText)
    const newNotes = {newTitle, newText, id: uuidv4}
    notes.push(newNotes);
    let note = JSON.stringify(notes);
    
    fs.writeFile("./db/db.json", note, function() {
        return newNote;
    })
})
}
