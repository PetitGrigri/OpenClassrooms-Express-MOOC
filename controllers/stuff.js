const Thing = require('../models/Thing');
const fs = require('fs');

exports.createThing = (req, res, next) => {
  // The body contains thing now, not each params
  const thingObject = JSON.parse(req.body.thing);
  delete thingObject._id;

  const thing = new Thing({
    ...thingObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  })

  thing.save()
    .then(() => res.status(201).send())
    .catch(err => res.status(400).json({ error }))
};

exports.getAllThings = (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(err => res.status(400).json({err}))
};

exports.getThing = (req, res, next) => {
  Thing.findById(req.params.id)
    .then(thing => res.status(200).json(thing))
    .catch(err => res.status(400).json({err}))
};

exports.updateThing = (req, res, next) => {
  const thingObject = !req.file 
    ? { ...req.body }
    : { 
        ...JSON.parse(req.body.thing),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      };


  Thing.updateOne({ _id: req.params.id}, { ...thingObject, _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(err => res.status(404).json({err}))
};

exports.deleteThing = (req, res, next) => {
  const thingToDelete = Thing.findById(req.params.id)
    .then(thing => {
      const filename = thing.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, err => {
        Thing.deleteOne({ _id: req.params.id})
          .then(() => res.status(204).json({ message: "deleted" }))
          .catch(err => res.status(404).json({err}));
      })
    })
    .catch(err => res.status(500).json({err}));
};