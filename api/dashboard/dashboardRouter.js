const express = require('express');
const authRequired = require('../middleware/authRequired');
const Dashboard = require('./dashboardModel');
const router = express.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = new aws.S3();

aws.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    key: function (req, file, cb) {
      cb(null, file.originalname); //use Date.now() for unique file keys
    },
  }),
});

// To insert Swagger docs here

// Download Doc
// s3.getObject(
//   { Bucket: "my-bucket", Key: "my-picture.jpg" },
//   function (error, data) {
//     if (error != null) {
//       alert("Failed to retrieve an object: " + error);
//     } else {
//       alert("Loaded " + data.ContentLength + " bytes");
//       // do something with data.Body
//     }
//   }
// );

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
