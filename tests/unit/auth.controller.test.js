const AuthController = require("../controllers/auth.controller");

describe ('Authcontroller.createAuth',()=>{
   
    it("should have a Auth function", () => {
        expect(typeof AuthController.createAuth).toBe("function");
    
    });

});