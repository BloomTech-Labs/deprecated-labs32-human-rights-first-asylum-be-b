const router = require('express').Router();
const fs = require('fs');
const { requiredFile } = require('../middleware/fileUpload');

router.post('/add', requiredFile('upload'), (req, res) => {
  const caseFile = req.file;
  fs.writeFileSync('./api/uploads/test.pdf', caseFile.buffer);
  res.status(200).json({});
});

module.exports = router;
