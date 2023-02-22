// this file is responsible for integration testing (supertest)

const app = require('./app');

app.listen(7000,() => {
   console.log("Server is running");


});