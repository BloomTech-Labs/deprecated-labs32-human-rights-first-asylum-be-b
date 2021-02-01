const router = require('express').Router();

const MainCategories = require('./main_categories-model');

router.get('/', (req, res) => {
  MainCategories.getMainCategories()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});

module.exports = router;
