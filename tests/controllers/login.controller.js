const LoginModel = require("./model/login.model");


exports.createLogin = async (req,res,next) => {
   const createdModel = await LoginModel.create(req.body);
   res.status(201).json(createdModel);

};

