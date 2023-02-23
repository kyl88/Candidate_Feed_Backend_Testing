const UserModel = require('../controllers/model/user.model');

const LoginModel = require("./model/login.model");


exports.createUser =  (req,res,next) => {
   try {

 
       const createdModelUser = UserModel.create(req.body);
        res.status(201).json(createdModelUser);
   } catch (err) {
        next(err); 
   }   
};

