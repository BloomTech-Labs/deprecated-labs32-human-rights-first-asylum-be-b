const db = require('../../data/db-config');

const getAll = async () => {
  return await db('dashboard');
};

// ------------------ TBU

const add = async (data) => {
  return await db('dashboard').insert(data);
};

const getById = async (id) => {
  return db('dashboard').where({ id }).first();
};

module.exports = {
  getAll,
};
