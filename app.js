const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routerStuff = require('./routes/stuff');
const routerProducts = require('./routes/products');
const routerUsers = require('./routes/user');


// Mongoose connection to MongoDB
mongoose.connect('mongodb://root:example@localhost:27017',{ 
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  dbName: 'oc-express'
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
/**
 * Remove deprecation warning
 * @see https://mongoosejs.com/docs/deprecations.html#-ensureindex-
 */
mongoose.set('useCreateIndex', true);

const app = express();


// Prevent CORS errors on all request
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Use body parser for request with json content in the body
app.use(bodyParser.json());

// Handle specific routes
app.use('/api/stuff', routerStuff);
app.use('/api/products', routerProducts);
app.use('/api/auth', routerUsers);

module.exports = app;