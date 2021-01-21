const db = require('../data/dbConfig.js');

module.exports = {
  getCases,
  insertCase,
  getCaseById,
  // updateCase,
  // removeCase,
};

// | Request | URL | Description | Returns | Ready |
// | ------- | --- | ----------- | ------- | ------- |

// getCases function
// | GET | api/cases/ | gets all cases | array of all cases | |
// get all cases, AND tags associated with cases (getTagsByCase)
// return an array of all cases with an array of all tags

function getCases() {
  return db('cases');
};

// | POST | api/cases/ | post a new case| the new case Obj | |
// post a cases AND for each tag:
// if tag is new: post to tags
// Regardless post to tags by cases
// tags should be held in the body of this request as an array
// newCase obj will look like this:
// newCase : {case:{...},tags:[...]}

async function insertCase(newCase){
    return db('cases').insert(newCase.case) 
}

// | GET | api/cases/:id | gets the case with a specified ID | Obj with case | |
// id is in the req.id
// gets the case with the id, AND
// for each tag in tag_by_case it gets the corresponding tag
function getCaseById(id){
  return db('cases').where({id}).first()

}


// | GET | api/cases/:id/tags | gets all tags for the case with a specified ID | array with tags | |
// gets tags by the case id

// | PUT | api/cases/:id | updates case with specified ID | new case Obj | |
// | PUT | api/cases/:id/tags | updates tags for case with specified ID | new case Obj | |
// | DELETE | api/cases/:id | deletes a case with specified ID | number of deleted objects | |


// OBSOLETE | POST | api/cases/:id/tags | post a new tag to a specified case | array with tags | |