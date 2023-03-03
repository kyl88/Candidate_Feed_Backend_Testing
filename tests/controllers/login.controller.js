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
  const loginModels = await LoginModel.findById(req.params.loginModels);
  res.status(200).json(loginModels);

};

exports.updateLogin = async(req,res, next) => {

     try {
          const updatedLogin = await  this.updateLogin.findByIdUpdate(
             req.params.userId,
             req.body,
             {
                new:true,
                userFindAndModify: false
       
             }
       
       
          );
       
          // error handling for PUT
       
          if (updatedLogin){
       
           res.status(200).json(updatedLogin);
       
       
          } else {
       
            res.status(404).send();
       
          }
       
           
        } catch(err) {
       
            next(err);
        }
       
       

};

// delete controller - Delete HTTP method
exports.deleteLogin = async(req,res,next)=> {
  LoginModel.findByIdAndDelete(req.params.loginId);

 
};