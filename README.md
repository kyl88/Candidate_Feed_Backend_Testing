# candidate-feed-BE
this is backend repository for the candidate feed projects
1. Test cases for Unit Testing was tested by JEST.
2. Test cases for Integration Testing was tested by Supertest.
3. Manual testing of the routes can be done by using POSTMAN API.

---
## Dependencies

- express-async-handler
- jest
- jsonwebtoken
- mongoose
- node-mocks-http
- supertest


---
## Backend test cases performed

### unit test performed (login)

- delete login unit test
- should have a deleteLogin function
- call findByIdAndDelete function
- Have a update function for login
- GET method test for login
- call LoginModel.find({})
- call LoginModel.create
- login should have return 201 response code
- testing LoginModel id routes
- Return json body and response code 200 for Login
- Should handle errors

### unit test performed (user)

- delete user unit test
- should have a deleteUser function
- call findByIdAndDelete function
- Have a update function for user
- GET method test for user
- call UserModel.find({})
- call UserModel.create
- user should have return 201 response code
- testing UserModel id routes
- Return json body and response code 200 for User

### integration test performed (login)

-  test Post method based on login model
-  test server-side error with 500 misused data

### integration test performed (user)

-  test Post method based on delete model
-  test server-side error with 500 misused data






