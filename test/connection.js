const mongoose = require("mongoose");

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before test run
before(function(done) {
  // Connect to mongodb
  mongoose.connect("mongodb://localhost/testdb");

  mongoose.connection
    .once("open", function() {
      console.log("Connection Created");
      done();
    })
    .on("error", function(error) {
      console.log("Connection error ", error);
    });
});
