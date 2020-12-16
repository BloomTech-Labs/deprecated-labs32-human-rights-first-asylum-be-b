const router = require('express').Router();
const { requiredFile } = require('../middleware/fileUpload');

router.post('/add', requiredFile('upload'), (req, res) => {
  // const caseFile = req.file;
  // TODO: upload file to ds or whatever they wanna do
  res.status(200).json({});
});

module.exports = router;
