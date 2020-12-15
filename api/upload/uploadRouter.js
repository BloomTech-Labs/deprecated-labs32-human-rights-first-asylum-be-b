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

/*  --- Upload Single File --- */
router.post('/upload', upload.array('upload', 1), (req, res) => {
  const S3_BUCKET = process.env.BUCKET_NAME;
  const filename = req.files[0].originalname;
  const fileType = filename.slice(-3);

  // filetype validation
  if (!fileType.includes('pdf') && !fileType.includes('csv')) {
    throw new Error('Must be pdf or csv only');
  }

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: filename,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }
    // Data payload of the url of the signedRequest and a URL where we can access the content after its saved.
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${filename}`,
    };

    res.json({ success: true, data: { returnData } });
  });
});
