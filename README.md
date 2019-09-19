# nodejs-login-crud
A login system with encrypt passwords and tokens, with a customer crud.

This app was built in Node.js with Restify, Mongoose and JWT. It uses 'jsonwebtoken' to create tokens and restify-jwt-community to protect the routes.

To run it locally use the command 'npm start' inside the project folder.

http://localhost:3000

To unprotect the routes just put // in the line 13 of index.js

Customer routes are:
GET - '/customers'
GET - '/customers/:id'
POST - '/customers'
PUT - '/customers/:id'
DELETE - '/customers/:id'

User routes are:

POST /register
POST /auth
