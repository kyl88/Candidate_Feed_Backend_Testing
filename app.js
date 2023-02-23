// Basic app function

const express = require('express');
const loginRoutes = require("./routes/login.routes");
const userRoutes = require("./routes/user.routes");
const app = express();
const mongoDB = require("./tests/controllers/mongodb/mongodb.connect");

mongoDB.connect();

app.use(express.json());

app.use("/login", loginRoutes);
app.use("/user", userRoutes);


app.get("/", (req, res) => {
   res.json("First test case");




});

app.post("/", (req,res)=>{


});



app.put("/id", (req,res)=>{


});

app.delete("/id", (req,res)=>{


});





//app.listen(7000,() => {
 //  console.log("Server is running");


//});

module.exports = app;

