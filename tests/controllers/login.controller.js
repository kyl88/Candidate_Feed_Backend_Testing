const LoginModel = require("./model/login.model");


exports.createLogin = async (req,res,next) => {
   try {

 
       const createdModel = await LoginModel.create(req.body);
        res.status(201).json(createdModel);
   } catch (err) {
        next(err); 
   }   
};

// Testing login function (GET Method)
exports.getLogin = async(req,res,next)=> {
 LoginModel.find({});

};

// test Login model.ById is called
exports.getLoginById = async(req,res,next)=> {

};

exports.updateLogin = async(req,res, next) => {

};

exports.deleteLogin = async(req,res,next)=> {

};