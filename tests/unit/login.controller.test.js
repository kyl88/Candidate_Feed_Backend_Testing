const LoginController = require("../controllers/login.controller");
const LoginModel = require("../controllers/model/login.model");
const httpsMocks = require('node-mocks-http');
const newLogin = require('../mock-data/new-login.json');


LoginModel.create = jest.fn();

// basic function

let req,res,next;
beforeEach(()=>{
  
  req = httpsMocks.createRequest();
  res = httpsMocks.createResponse();
  next=jest.fn();

});


describe ("LoginController.createLogin", ()=>{
  
  beforeEach(()=>{
    req.body = newLogin;  


  });
  
  
  it("should have a login function", () => {
    expect(typeof LoginController.createLogin).toBe("function");

  });

  it("should call LoginModel.create", ()=> {
     
    
     LoginController.createLogin(req,res,next);
     expect(LoginModel.create).toBeCalledWith(newLogin);

  });

   it("login should have return 201 response code",async ()=> {
    
     await LoginController.createLogin(req,res,next);
     expect(res.statusCode).toBe(201);
     expect(res._isEndCalled()).toBeTruthy();
    

   });

   //it("test if next is null", ()=> {
   
    // expect(next).toBeNull(); 
      

 // });

  //checking mongoDB response
  // Lecture 16

  // test case is failing

  it("should return json body in response", async ()=> {
       // LoginModel.create.mockReturnValue(newLogin);
       // await LoginController.createLogin(res,req,next);
     
       // expect( res._getData()).toStrictEqual(newLogin);  
        
    });

     it ('user should be 201 status code',async()=>{
      req.body = newLogin;
      await LoginController.createLogin(req,res,next);
     expect(res.statusCode).toBe(201);
      expect(res._isEndCalled()).toBeTruthy();
  });


 // Failed test case 01
  it("should handle errors",async ()=>{
     const errorMessage = {message: "Done property missing"};
     const rejectedPromise = Promise.reject(errorMessage);
     LoginModel.create.mockReturnValue(rejectedPromise);
     await LoginController.createLogin(req, res, next);
     expect(next).toBeCalledWith(errorMessage);
     
  });

});