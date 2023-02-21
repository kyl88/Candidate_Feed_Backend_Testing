const request = require("supertest");
const app = require("../../app");
const newLogin = require("../mock-data/new-login.json");

const endpointUrl = "/login/";


describe(endpointUrl, ()=> {

// testing HTTP methods in Rest
// Post - create new
// Get - Get existing
// Put - Update existing
// Delete - delete existing

   it('POST',async ()=>{
     const response = await request(app)
       .post(endpointUrl)
       .send(newLogin);
       expect(response.statusCode).toBe(201);
       expect(response.body.login).toBe(newLogin.login);
       expect(response.body.done).toBe(newLogin.done);
       

   });



});
