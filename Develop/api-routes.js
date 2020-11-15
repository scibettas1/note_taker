var express = require("express");
var path = require("path");

var notes = require('./db/db.json');

var app = express();

module.exports = function(app) {

    app.get('/api/notes', function (req, res){
        rest.json();
    })
}
