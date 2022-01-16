const express = require("express");
const app = express();
require("dotenv").config({ path: "./config.env" });
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");

app.get('/', (req,res) => {
    res.send("hello world")
})
app.use(require("./routes/record"));
const port = process.env.PORT || 5000;
app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });
    console.log(`Server is running on port: ${port}`);
});