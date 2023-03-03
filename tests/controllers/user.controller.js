const UserModel = require('../controllers/model/user.model');
const LoginModel = require('./model/login.model');


exports.createUser = async  (req,res,next) => {
   try {

 
       const createdModelUser = await UserModel.create(req.body);
        res.status(201).json(createdModelUser);
   } catch (err) {
        next(err); 
   }   
};

// Testing User function (GET Method)
exports.getUser = async(req,res,next)=> {
    UserModel.find({});
   
};

// test User model.ById is called and response 200 code test for user model case is passed
exports.getUserById = async(req,res,next)=> {
   const userModels = await UserModel.findById(req.params.userModels);
   res.status(200).json(userModels)

};


exports.updateUser = async(req,res, next) => {

try {
   const updatedUser = await  updateModel.findByIdUpdate(
      req.params.userId,
      req.body,
      {
         new:true,
         userFindAndModify: false

      }


   );

   // 

   if (updatedUser){

    res.status(200).json(updatedUser);


   } else {

     res.status(404).send();

   }

    
 } catch(err) {

     next(err);
 }


};

exports.updateUser = async(req,res,next)=>{
 
    UserModel.findByIdAndUpdate(req.params.userId);
  
   
  

};


// delete controller  - Delete HTTP method
exports.deleteUser = async(req,res,next)=>{
 
    UserModel.findByIdAndDelete(req.params.userId);
  
   
  

};
