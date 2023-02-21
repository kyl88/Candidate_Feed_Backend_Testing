// Basic app function

const express = require('express');
const loginRoutes = require("./routes/login.routes");
const app = express();

app.use(express.json());

app.use("/login", loginRoutes);


app.get("/", (req, res) => {
   res.json("First test case");




});

app.post("/", (req,res)=>{


});



app.put("/id", (req,res)=>{


});

app.delete("/id", (req,res)=>{


});





app.listen(7000,() => {
   console.log("Server is running");


});

module.exports = app;

