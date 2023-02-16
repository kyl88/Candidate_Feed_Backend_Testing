const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  login: {
    type:String,
    required: true

  },

  done: {
    type:Boolean,
    required: true

  }
     


});

const LoginModel = mongoose.model('Login',LoginSchema);

module.exports = LoginModel;

