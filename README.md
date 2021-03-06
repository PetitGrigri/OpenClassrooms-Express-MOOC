# MOOC OpenClassrooms Express
A simple repository which is created to follow the [MOOC about express on OpenClassrooms](https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb)

## Used commands
- Frontend :
    - ng serve
- Backend
    - node server : lauch the server on port 3000
    - nodemon server : lauch the server on port 3000 but the server is update according the sources.

## Tags
- 1.3 : Simple node server
- 1.4 : Simple express server
- 1.5 : Create our first route (all methods accepted)
- 1.6 : Handdle Post and Get
- 2.1 : Add MongoDB, Mongo-express (with docker-compose) and mongoose
- 2.2 : Add Thing model 
- 2.3 : The API can create Thing, Get all Things on get a specific Thing
- 2.4 : The API can delete and update Thing
- 2.5 : Add CRUD for Products (Test)
- 3.1.1 : Cleaning the structure, step 1, all route inside app go inside routes folder
- 3.1.2 : Cleaning the structure, step 2, all business logic move inside controllers folder
- 3.2 : Add User model
- 3.3 : Add user files structures (routes, controllers) + the API can create a User
- 3.4 : Add authentication logic (no token yet)
- 3.5 : Update authentication logic (create a jwt token)
- 4.1 : Add multer middleware
- 4.2 : Handle an image inside form
- 4.3 : Delete Things's image when deleted

## Dependencies
- angular cli (npm install -g @angular/cli)
- node (12.18.1) & npm (6.14.5)
- nodemon (npm install -g nodemon)
- body-parser (npm install --save body-parser)
- mongoose (npm install --save mongoose)
- mongoose-unique-validator (npm install --save mongoose-unique-validator)
- bcrypt (npm install --save bcrypt)
- jsonwebtoken (npm install --save jsonwebtoken)
- multer (npm install --save multer)