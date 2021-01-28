const db = require('../../config/dbConfig.js');

module.exports = {
  getMainCategories,
  insertMainCategory,
};

function getMainCategories() {
  return db('main_categories');
}

function insertMainCategory(main_category_name) {
  return db('main_categories').insert({ main_category_name });
}
