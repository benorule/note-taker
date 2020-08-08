// HTML Routes
const http = require('http');
const fs = require('fs');
var path = require('path');
var router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;

// module.exports = function(app) {
//   app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
//   });

//   // app.get("/reserve", function(req, res) {
//   //   res.sendFile(path.join(__dirname, "../public/reserve.html"));
//   // });

//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });
// };