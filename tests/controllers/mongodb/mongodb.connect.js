const mongoose = require ("mongoose");

// fixed call back error
async function connect(){
  try {
     await mongoose.connect(
      "mongodb+srv://kyle88:9kT69UIeH0gPDLMr@feedcluster.dl4vloh.mongodb.net/test",
       {useNewUrlParser: true}
    );

   } catch (err) {
     console.error("Error connecting to mongodb");
     console.error(err);


  }

}

module.exports = {connect};




  




