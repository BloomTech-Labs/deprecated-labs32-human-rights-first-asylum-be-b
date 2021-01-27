const db = require('../../config/dbConfig.js');

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

async function getCases() {
  const cases = await db('cases');
  const tags = await db('tags_by_cases as tbc')
  .leftJoin('tags','tbc.tag_id','tags.id')
  .leftJoin('main_categories as m','tags.main_id','m.id')
  .leftJoin('sub_categories as s','tags.sub_id','s.id')
  .select('tbc.tag_id', 'tbc.case_id as case_id','s.sub_category_name as sub_category_name','m.main_category_name as main_category_name','tags.tag_name as tag_name')
  console.log(tags)

  const casesWithTags =  cases.map(obj => {
    obj.tags = tags.filter(tag => obj.id === tag.case_id)
    return obj
  })

  return casesWithTags

  // return {
  //   cases: cases,
  //   tags: tags
  // }
};

// | POST | api/cases/ | post a new case| the new case Obj | |
// post a cases AND for each tag:
// if tag is new: post to tags
// Regardless post to tags by cases
// tags should be held in the body of this request as an array
// newCase obj will look like this:
// newCase : {case:{...},tags:[...]}

async function insertCase(newCase){
    const id = await db('cases').insert(newCase.case)
    newCase.tags.map(async tagId => {
      const newTag = await db('tags_by_cases').insert({'case_id': id, 'tag_id': tagId})
    })
    const returnCase = await db('cases').where({id}).first()
    returnCase.tags = await db('tags_by_cases as tbc')
    .where({'tbc.case_id': id})
    .leftJoin('tags','tbc.tag_id','tags.id')
    .leftJoin('main_categories as m','tags.main_id','m.id')
    .leftJoin('sub_categories as s','tags.sub_id','s.id')
    .select('tbc.tag_id', 'tbc.case_id as case_id','s.sub_category_name as sub_category_name','m.main_category_name as main_category_name','tags.tag_name as tag_name')
    return returnCase

}

// | GET | api/cases/:id | gets the case with a specified ID | Obj with case | |
// id is in the req.id
// gets the case with the id, AND
// for each tag in tag_by_case it gets the corresponding tag
async function getCaseById(id){
  const caseObj = await db('cases').where({id}).first()
  caseObj.tags = await db('tags_by_cases as tbc')
  .where({'tbc.case_id': id})
  .leftJoin('tags','tbc.tag_id','tags.id')
  .leftJoin('main_categories as m','tags.main_id','m.id')
  .leftJoin('sub_categories as s','tags.sub_id','s.id')
  .select('tbc.tag_id', 'tbc.case_id as case_id','s.sub_category_name as sub_category_name','m.main_category_name as main_category_name','tags.tag_name as tag_name')

  return caseObj

}


// | GET | api/cases/:id/tags | gets all tags for the case with a specified ID | array with tags | |
// gets tags by the case id

// | PUT | api/cases/:id | updates case with specified ID | new case Obj | |
// | PUT | api/cases/:id/tags | updates tags for case with specified ID | new case Obj | |
// | DELETE | api/cases/:id | deletes a case with specified ID | number of deleted objects | |


// OBSOLETE | POST | api/cases/:id/tags | post a new tag to a specified case | array with tags | |