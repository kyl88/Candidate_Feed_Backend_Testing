const UserModel = require('../controllers/model/user.model');


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

// test User model.ById is called
exports.getUserById = async(req,res,next)=> {

};


exports.updateUser = async(req,res, next) => {

};
