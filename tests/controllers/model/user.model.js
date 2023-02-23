
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
   required: true
 
 },
 independentgoal: {
   type: String,

   required: true
   
   },
 
 hiringgoals: [{
   type: String,
   
    required: true
  }],

  hiringskills: [{
    type: String,
    required: true

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
         type:String
         
       
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