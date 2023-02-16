const LoginController = require("../controllers/login.controller");
const LoginModel = require("../controllers/model/login.model");

LoginModel.create = jest.fn();



describe ("LoginController.createLogin", ()=>{
  it("should have a login function", () => {
    expect(typeof LoginController.createLogin).toBe("function");

  });

  it("should call LoginModel.create", ()=> {
     LoginController.createLogin();
     expect(LoginModel.create).toBeCalled();

  });

});