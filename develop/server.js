const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// make public folder available for use
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// host server on local host and present end user with link in console
app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});
