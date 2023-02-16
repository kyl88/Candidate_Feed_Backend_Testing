
const UserController = require('../controllers/user.controller');
const UserModel = require('../controllers/model/user.model');
const httpsMocks = require('node-mocks-http');
const newModel = require('../../new-user.json');

UserModel.create = jest.fn();

let req,res,next;
beforeEach(()=>{
  
  req = httpsMocks.createRequest();
  res = httpsMocks.createResponse();
  next=null;

});


describe('UserController.createUser',()=> {
   it('It should call the User function',()=>{

     expect(typeof UserController.createUser).toBe('function');


   });

   it("should call UserModel.create", ()=> {
   
     res.body = newModel;
     UserController.createUser(req,res,next);
      expect(UserModel.create).toBeCalledWith(newModel);
   });

    it ('user should be 201 status code',()=>{
        req.body = newModel;
        UserController.createUser(req,res,next);
        expect(res.statusCode).toBe(201);
        
    });
   

});