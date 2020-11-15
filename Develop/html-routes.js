var express = require("express");
var path = require("path");

var app = express();

module.exports = function(app) {
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.use(express.static(__dirname + '/public'));
}
