// Basic app function

const express = require('express');
const app = express();

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



