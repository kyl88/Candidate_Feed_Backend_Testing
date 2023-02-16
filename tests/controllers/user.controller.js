const UserModel = require('../controllers/model/user.model');

exports.createUser =(req,res,next) => {
 UserModel.create(req.body);
 res.status(201);

};

