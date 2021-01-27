const router = require('express').Router();
// const { requiredFile } = require('../middleware/fileUpload');

const Tags = require('./tags-model');

// validate id middleware
const validateId = (req, res, next) => {
  const id = req.params.id;

  Tags.getTagById(id)
    .then((data) => {
      if (data) {
        req.caseObj = data;
        next();
      } else {
        next({
          code: 400,
          message: 'There is no tag with id ' + id,
          type: 'validateId',
        });
      }
    })
    .catch((error) => {
      next({
        code: 500,
        message: error.message,
        type: 'validateId',
      });
    });
};

// validate body unifinished
const validateBody = (req, res, next) => {
  const body = req.body;

  if (!body) {
    next({
      code: 400,
      message: 'you must have a description and name',
      type: 'validateBody',
    });
  } else {
    req.bodyObj = body;
    next();
  }
};

//get all tags
router.get('/', (req, res) => {
  Tags.getTags()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({
        message: error.message,
      });
    });
});

// get tag by id
router.get('/:id', validateId, validateBody, (req, res) => {
  res.status(200).json(req.caseObj);
});

// post tag
router.post('/', (req, res) => {
  Tags.insertTag(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
});

router.use((err, req, res, next) => {
  res.status(err.code).json({
    message: err.message,
    type: err,
  });
  next();
});

module.exports = router;
