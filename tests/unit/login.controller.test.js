const LoginController = require("../controllers/login.controller");
const LoginModel = require("../controllers/model/login.model");
const httpsMocks = require('node-mocks-http');
const newLogin = require('../mock-data/new-login.json');


LoginModel.create = jest.fn();
LoginModel.find = jest.fn();
LoginModel.findById = jest.fn();
LoginModel.findByIdAndUpdate = jest.fn();
LoginModel.findByIdAndDelete=jest.fn();
// basic function

let req,res,next;
const loginId = ""; // token goes here
beforeEach(()=>{ // server listens
  
  req = httpsMocks.createRequest();
  res = httpsMocks.createResponse();
  next=jest.fn();

});


// delete login unit test
describe("LoginController.deleteLogin",()=>{
  it("should have a deleteLogin function",()=>{
      expect(typeof LoginController.deleteLogin).toBe("function");
       

  });

  it("should call findByIdAndDelete",async()=>{
     req.params.loginId = loginId;
     await LoginController.deleteLogin(req, res, next);
     expect(LoginModel.findByIdAndDelete).toBeCalledWith(loginId);

     

  });

});

// testing put requests for login model

describe('LoginController.updateLogin',()=>{
 it("should have a updateLogin function", ()=>{
   expect (typeof LoginController.updateLogin).toBe("function");

 });

});

// GET method test for Login
describe("LoginController.getLogin",()=>{
  it("It should have a get login function",()=>{
     expect (typeof LoginController.getLogin).toBe("function");
     
   });

   describe("LoginController.getLoginById",()=>{
     it("should have a getLoginById", ()=>{
       expect(typeof LoginController.getLoginById).toBe("function");

     });

   });

  it("should call LoginModel.find({})",async()=>{
    await LoginController.getLogin(res,req,next);
    expect(LoginModel.find).toBeCalledWith({});


  });

  it ("Should return response with status 200 and all Logins",async()=>{
     await LoginController.getLogin(req,res,next);
     expect (res.statusCode).toBe(200);
  }); 

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


  it("should return json body in response", async ()=> {
        LoginModel.create.mockReturnValue(newLogin);
        await LoginController.createLogin(res,req,next);
     
     
        
    });

     it ('user should be 201 status code',async()=>{
      req.body = newLogin;
      await LoginController.createLogin(req,res,next);
     expect(res.statusCode).toBe(201);
      expect(res._isEndCalled()).toBeTruthy();
  });
  

  // testing LoginModel id routes
  it("Should call LoginModel.findId by routes",async()=>{
     req.params.LoginId =" ";
     await LoginController.getLoginById(req,res,next);
    
  });

  it('Should return json body and response code 200 for Login',async()=>{
      LoginModel.findById.mockReturnValue(newLogin);
      await LoginController.getLoginById(req,res,next);

      expect(res.statusCode).toBe(200);
      expect(res._getJSONData()).toStrictEqual(newLogin);
      expect(res._isEndCalled()).toBeTruthy();

  });



 // test case to be reviewed
 
  it("should handle errors",async ()=>{
     const errorMessage = {message: "Done property missing"};
     const rejectedPromise = Promise.reject(errorMessage);
     LoginModel.create.mockReturnValue(rejectedPromise);
     await LoginController.createLogin(req, res, next);
     expect(next).toBeCalledWith(errorMessage);
     
  });

});