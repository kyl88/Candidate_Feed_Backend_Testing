
const UserController = require('../controllers/user.controller');
const UserModel = require('../controllers/model/user.model');

UserModel.create = jest.fn();


describe('UserController.createUser',()=> {
   it('It should call the User function',()=>{

     expect(typeof UserController.createUser).toBe('function');


   });

   it("should call LoginModel.create", ()=> {
    UserController.createUser();
    expect(UserModel.create).toBeCalled();

 });

   

});