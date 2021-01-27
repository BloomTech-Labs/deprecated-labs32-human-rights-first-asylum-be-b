const router = require('express').Router();

const SubCategories = require('./sub_categories-model');

router.get('/', (req, res) => {
  SubCategories.getSubCategories()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});
