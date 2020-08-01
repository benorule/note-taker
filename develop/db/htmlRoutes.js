// HTML Routes
const http = require('http');
const fs = require('fs');
var path = require('path');

module.exports = function(app) {
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/notes.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });
};