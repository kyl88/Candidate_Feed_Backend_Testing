const request = require("supertest");
const app = require("../../app");
const newModel = require("../../new-user.json");

const endpointUrlUser = "/user/";
 // test HTTP methods in Rest for Login
 // Post - create new
 // Get - Get existing
 // Put - Update existing
 // Delete - delete existing
 

  describe(endpointUrlUser,()=>{
    it ('POST', async()=> {
      const response = await request (app)
        .post (endpointUrlUser)
        .send (newModel);
       expect (response.statusCode).toBe(201);
       expect (response.body.email).toBe(newModel.email);
       expect (response.body.password).toBe(newModel.password);
       expect (response.body.signupmethod).toBe(newModel.signupmethod);
       expect (response.body.role).toBe(newModel.role);
       expect (response.body.independentgoal).toBe(newModel.independentgoal);
       expect (response.body.hiringgoals).toBe(newModel.hiringgoals);
       expect (response.body.hiringskills).toBe(newModel.hiringskills);
       expect (response.body.startstate).toBe(newModel.startstate);
       expect (response.body.durationstate).toBe(newModel.durationstate);
       expect (response.body.budget).toBe(newModel.budget);
      



    });

  });  

