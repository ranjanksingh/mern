const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const DefaultData = require("./defaultdata");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
var movies = require('./routes/movies.js');
var moviesDB = require('./routes/moviesdb.js');
//without mongodb
//app.use('/movies', movies);
//with  mongodb
app.use('/movies',moviesDB );
// get driver connection
const dbo = require("./db/conn");
require("./db/mongoosconn");
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
DefaultData();

// = app