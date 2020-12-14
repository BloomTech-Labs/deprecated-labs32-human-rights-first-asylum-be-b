const express = require('express');
const authRequired = require('../middleware/authRequired');
const Dashboard = require('./dashboardModel');
const router = express.Router();
const multer = require('multer');
const fs = require('fs-extra');
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      let userId = req.body.user_id || 1;
      let path = `../../uploads/${userId}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + file.originalname);
    },
  }),
});

// To insert Swagger docs here

// TEST PURPOSES
router.get('/', function (req, res) {
  Dashboard.getAll()
    .then((info) => {
      res.status(200).json(info);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

// Single File
router.post('/upload', upload.single('upload'), (req, res) => {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

// REAL
// router.get('/', authRequired, function (req, res) {
//   Dashboard.findAll()
//     .then((info) => {
//       res.status(200).json(info);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ message: err.message });
//     });
// });

module.exports = router;
