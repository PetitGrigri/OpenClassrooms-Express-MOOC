const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/Thing');
const Product = require('./models/Product');

/**
 * Mongoose connection to MongoDB
 */
mongoose.connect('mongodb://root:example@localhost:27017',{ 
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  dbName: 'oc-express'
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();


/**
 * Prevent CORS errors on all request
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/**
 * Use body parser for request with json content in the body
 */
app.use(bodyParser.json());


/**
 * /api/stuff 
 */
app.post('/api/stuff', (req, res, next) => {
  delete req.body._id;

  const thing = new Thing({
    ...req.body
  })

  thing.save()
    //.then(object => { console.log(object); return object}) // Debug
    .then(() => res.status(201).send())
    .catch(err => res.status(400).json({ error }))
});

// Handle GET request to "/api/stuff"
app.get('/api/stuff', (req, res, next) => {
Thing.find()
  .then(things => res.status(200).json(things))
  .catch(err => res.status(400).json({err}))
});

// Handle GET request to "/api/stuff/ID
app.get('/api/stuff/:id', (req, res, next) => {
  Thing.findById(req.params.id)
    .then(thing => res.status(200).json(thing))
    .catch(err => res.status(400).json({err}))
});

// Handle PUT request to "/api/stuff/ID
app.put('/api/stuff/:id', (req, res, next) => {
  Thing.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(err => res.status(404).json({err}))
});

// Handle DELETE request to "/api/stuff/ID
app.delete('/api/stuff/:id', (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id})
    .then(() => res.status(204).json({ message: "deleted" }))
    .catch(err => res.status(404).json({err}))
});






/**
 * /api/products 
 */
// Handle POST request to "/api/products"
app.post('/api/products', (req, res, next) => {
  delete req.body._id;

  const thing = new Product({
    ...req.body
  })

  thing.save()
    //.then(object => { console.log(object); return object}) // Debug
    .then(product => res.status(201).json({product}))
    .catch(err => res.status(400).json({ error }))
});


// Handle GET request to "/api/products"
app.get('/api/products', (req, res, next) => {
  Product.find()
    .then(products => res.status(200).json({products}))
    .catch(err => res.status(400).json({err}))
});

// Handle GET request to "/api/products/ID
app.get('/api/products/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.status(200).json({product}))
    .catch(err => res.status(400).json({err}))
});

// Handle PUT request to "/api/products/ID
app.put('/api/products/:id', (req, res, next) => {
  Product.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id })
    .then(thing => res.status(200).json({ message: "Modified!" }))
    .catch(err => res.status(404).json({err}))
});

// Handle DELETE request to "/api/products/ID
app.delete('/api/products/:id', (req, res, next) => {
  Product.deleteOne({ _id: req.params.id})
    .then(() => res.status(204).json({ message: "Deleted!" }))
    .catch(err => res.status(404).json({err}))
});



module.exports = app;