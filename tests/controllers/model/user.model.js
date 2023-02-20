
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
     type: String,
     required: true
  },

  password: {
     type: String,
     required: true
  },

  signupmethod: {
     type: String,
     required: true

  },

  role: {
   type: String,
   required: true,
   enum: ["Independant", "Hirer"]
 },
 independentgoal: {
   type: String,
   enum: ["Build-Portfolio", "Get-Discovred", "Find-Opportunities", "Commission-Free"],
   required: function () {return this.role === "Independant"}
   
   },
 
 hiringgoals: [{
   type: String,
    enum: ["Hire-Freelancers", "Browse-Talent", "Manage-Freelancers"],
    required: function () {return this.role === "Hirer"}
  }],

  hiringskills: [{
    type: String,
    required: function () {return this.role === "Hirer"}

  }],

  phonenumber: String,
  timeline: {
    startState: {
       type: Number,
       enum: [0,1,2,3]

    },

    durationState: {
       type: Number,
       enum: [0,1,2,3,4,5]
    }, 
    
    budget: {
      genre: {
         type:String,
         enum :["Hourly-Rate", "Fixed-Price"]
      },
       
    price: {
       type: Number,
       enum:[0,1,3,4,5,6]
    },


   }

 }

});

const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;