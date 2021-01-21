const router = require('express').Router();
const { requiredFile } = require('../middleware/fileUpload');

const Cases = require("./caces-model")

// router.post('/add', requiredFile('upload'), (req, res) => {
//   // const caseFile = req.file;
//   // TODO: upload file to ds or whatever they wanna do
//   res.status(200).json({});
// });

//custom middleware


// validate id middleware
const validateId = (req,res,next) => {
  const id = req.params.id
  
  Cases.getCaseById(id)
  .then(data => {
      if(data) {
          req.caseObj = data
          next()
      }else{
          next({code:400, message: "There is no class with id " + id,type:"validateId"})
      }
  })
  .catch(error => {
      next({code:500,message:error.message,type:"validateId"})
  })
}

// validate body unifinished
const validateBody = (req,res,next) => {
  const body = req.body

  if (!body){
      next({code:400, message: "you must have a description and name",type:"validateBody"})
  }else{
      req.bodyObj = body
      next()
  }
}

//get all cases
router.get('/', (req,res) => {
  Cases.getCases()
  .then(data => {
      res.status(200).json(data)
  })
  .catch(error => {
      res.status(400).json({message:error.message})
  })
})

// get case by id
router.get('/:id', validateId,validateBody, (req,res) => {
  res.status(200).json(req.caseObj)
})

router.post('/', (req,res) => {
  Cases.insertCase()
  .then(data => {
    res.status(201).json(data)
  })
  .catch(error => {
    res.statusMessage(404).json({message:error.message})
  })
})


router.use((err, req, res, next) => {
  res.status(err.code).json({ message: err.message, type:err.type })
});



module.exports = router;

