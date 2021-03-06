const Product = require('../models/Product');

exports.createProduct = (req, res, next) => {
  delete req.body._id;

  const thing = new Product({
      ...req.body
  })

  thing.save()
    .then(object => { console.log(object); return object})
    .then(product => res.status(201).json({product}))
    .catch(err => res.status(400).json({ error }))
};
  

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then(products => res.status(200).json({products}))
    .catch(err => res.status(400).json({err}))
};

exports.getProduct = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => res.status(200).json({product}))
    .catch(err => res.status(400).json({err}))
};

exports.updateProduct = (req, res, next) => {
  Product.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id })
    .then(thing => res.status(200).json({ message: "Modified!" }))
    .catch(err => res.status(404).json({err}))
};

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id})
    .then(() => res.status(204).json({ message: "Deleted!" }))
    .catch(err => res.status(404).json({err}))
};
