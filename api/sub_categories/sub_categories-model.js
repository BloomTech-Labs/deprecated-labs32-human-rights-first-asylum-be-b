const db = require('../../config/dbConfig.js');

module.exports = {
  getSubCategories,
  insertSubCategory,
};

function getSubCategories() {
  return db('sub_categories');
}

function insertSubCategory(sub_category_name) {
  return db('sub_categories').insert({ sub_category_name });
}
