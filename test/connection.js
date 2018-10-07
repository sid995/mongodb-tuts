const mongoose = require("mongoose");

// Connect to mongodb
mongoose.connect("mongodb://localhost/testdb");

mongoose.connection
  .once("open", function() {
    console.log("Connection Created");
  })
  .on("error", function(error) {
    console.log("Connection error ", error);
  });
