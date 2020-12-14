const express = require('express');
const authRequired = require('../middleware/authRequired');
const Dashboard = require('./dashboardModel');
const router = express.Router();

// To insert Swagger docs here

// TEST PURPOSES
router.get('/', authRequired, function (req, res) {
  Dashboard.findAll()
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
