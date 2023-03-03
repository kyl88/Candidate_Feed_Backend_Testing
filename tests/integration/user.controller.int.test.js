const request = require("supertest");
const { response } = require("../../app");
const app = require("../../app");
const newModel = require("../../new-user.json");

const endpointUrlUser = "/user/";
 // test HTTP methods in Rest for Login
 // Post - create new
 // Get - Get existing
 // Put - Update existing
 // Delete - delete existing
 

  describe(endpointUrlUser,()=>{
    it ('POST', async()=> { // start
      const response = await request (app)
        .post (endpointUrlUser)
        .send (newModel);
      
      

       // finish

    });

    // return server-side error with 500 misused data

    it('return server-side error with 500 misused data for user ',()=>{
     async () => {
        const response = await request (app)
           .post(endpointUrlUser)
           .send({email:"kyle@gmail.com"});
          expect(response.statusCode).toBe(500); 
     } 


    });

    it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({password:"kyle1"});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

       it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({signupmethod:"user login"});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

    it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({role:"Independant"});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

    it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({independentgoal:"find-opportunities"});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

    it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({hiringgoals:"build portfolio"});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

    it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({hiringskills:"cv-screening"});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

    it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({startstate:2});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

    it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({durationstate:5});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

    it('return server-side error with 500 misused data for user ',()=>{
        async () => {
           const response = await request (app)
              .post(endpointUrlUser)
              .send({budget:"hourly-rate"});
             expect(response.statusCode).toBe(500); 
        } 
   
   
    });

});  

