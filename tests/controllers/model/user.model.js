
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
 independantgoal: {
   type: String,
   enum: ["Build-Portfolio", "Get-Discovred", "Find-Opportunities", "Commission-Free"],
   required: function () {return this.role === "Independant"}
   
   },
 
 hiringgoals: {
   type: String,
    enum: ["Hire-Freelancers", "Browse-Talent", "Manage-Freelancers"],
    required: function () {return this.role === "Hirer"}
 }



});

const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;