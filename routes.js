const express = require("express");
const path = require("path");
const fs = require("fs")
const { v4: uuidv4 } = require('uuid'); uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

module.exports = function (app) {

  app.use(express.static(__dirname + '/public'));
  // Basic route that sends the user first to the AJAX Page
  app.get("/api/notes", function (req, res) {
    console.log("get")
    res.sendFile(path.join(__dirname, "db/db.json"));
  });

  app.post("/api/notes", function (req, res) {
    console.log("post")
    //res.sendFile(path.join(__dirname, "db/db.json"));
    fs.readFile('db/db.json', 'utf8', function (err, data) {
      const notes = JSON.parse(data)
      console.log(notes)
      const title = req.body.title;
      const text = req.body.text;
      console.log(text)
      const newNotes = { title, text, id: uuidv4 }
      notes.push(newNotes);
      let note = JSON.stringify(notes);
      fs.writeFile("db/db.json", note, function () {
        res.end()
      })
    })

    

  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  app.get("/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "public/notes.html"));
  });



}
