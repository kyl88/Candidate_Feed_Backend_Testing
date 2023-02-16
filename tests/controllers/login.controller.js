const LoginModel = require("./model/login.model");


exports.createLogin = (req,res,next) => {
   LoginModel.create(req.body);
   res.status(201);
};

