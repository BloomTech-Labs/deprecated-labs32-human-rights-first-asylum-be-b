const router = require('express').Router();
const { requiredFile } = require('../middleware/fileUpload');

router.post('/add', requiredFile('upload'), (req, res) => {
  // const caseFile = req.file;
  // TODO: upload file to ds or whatever they wanna do
  res.status(200).json({});
});

// | Request | URL | Description | Returns | Ready |
// | ------- | --- | ----------- | ------- | ------- |

// getCases function
// | GET | api/cases/ | gets all cases | array of all cases | |
// get all cases, AND tags associated with cases (getTagsByCase)
// return an array of all cases with an array of all tags

// | POST | api/cases/ | post a new case| the new case Obj | |
// post a cases AND for each tag:
// if tag is new: post to tags
// Regardless post to tags by cases
// tags should be held in the body of this request as an array

// | GET | api/cases/:id | gets the case with a specified ID | Obj with case | |
// id is in the req.id
// gets the case with the id, AND
// for each tag in tag_by_case it gets the corresponding tag

// | GET | api/cases/:id/tags | gets all tags for the case with a specified ID | array with tags | |
// gets tags by the case id

// | PUT | api/cases/:id | updates case with specified ID | new case Obj | |
// | PUT | api/cases/:id/tags | updates tags for case with specified ID | new case Obj | |
// | DELETE | api/cases/:id | deletes a case with specified ID | number of deleted objects | |

module.exports = router;

// OBSOLETE | POST | api/cases/:id/tags | post a new tag to a specified case | array with tags | |
