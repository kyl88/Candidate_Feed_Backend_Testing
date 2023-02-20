const LoginModel = require("./model/login.model");


exports.createLogin = (req,res,next) => {
   const createdModel = LoginModel.create(req.body);
   res.status(201).json(createdModel)

};

