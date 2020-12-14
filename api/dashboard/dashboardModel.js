const db = require('../../data/db-config');

const getAll = async () => {
  return await db('dashboard');
};

module.exports = {
  getAll,
};
