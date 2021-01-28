const router = require('express').Router();

const CasesByCollections = require('./cases_by_collections-model');

router.post('/', (req, res) => {
  CasesByCollections.insertCaseByCollection(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
});

router.delete('/', (req, res) => {
  CasesByCollections.deleteCaseByCollection(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catcH((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
});
