const LoginController = require("../controllers/login.controller");
const LoginModel = require("../controllers/model/login.model");
const httpsMocks = require('node-mocks-http');
const newLogin = require('../mock-data/new-login.json');


LoginModel.create = jest.fn();



describe ("LoginController.createLogin", ()=>{
  it("should have a login function", () => {
    expect(typeof LoginController.createLogin).toBe("function");

  });

  it("should call LoginModel.create", ()=> {
     let req,res,next;
     req = httpsMocks.createRequest();
     res = httpsMocks.createResponse();
     next=null;
     req.body = newLogin; 
     LoginController.createLogin(req,res,next);
     expect(LoginModel.create).toBeCalledWith(newLogin);

  });

});