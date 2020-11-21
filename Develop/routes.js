const express = require("express");
const path = require("path");
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

module.exports = function(app) {
// Basic route that sends the user first to the AJAX Page
app.all("/api/notes", function(req, res) {

res.sendFile(path.join(__dirname, "db/db.json"));

 const newTitle = req.body.title;
 const newText = req.body.text;
 console.log(newText)
 const newNotes = {newTitle, newText, id: uuidv4}
 notes.push(newNotes);
 let note = JSON.stringify(notes);
 
 fs.writeFile("db/db.json", note, function() {
     return newNote;
 })

});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {

  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.use(express.static(__dirname + '/public'));

}
