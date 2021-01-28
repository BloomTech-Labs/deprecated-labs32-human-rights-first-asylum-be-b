const router = require('express').Router();

const Collections = require('./collections-model');

router.post('/', (req, res) => {
  Collections.insertCaseByCollection(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catcH((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
});

router.get('/:id', (req, res) => {
  Collections.getCollectionsByUser(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catcH((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
});
