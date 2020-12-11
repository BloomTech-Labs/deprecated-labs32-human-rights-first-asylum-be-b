const db = require('../../data/Pool');
const sqlLoader = require('sql-loader');

const sql = sqlLoader('../sql');

async function getUsers() {
  const { rows } = await db.query(sql.users.users);
  return rows;
}

async function getUser(id) {
  const { rows } = await db.query(sql.users.user, [id]);
  return rows;
}

module.exports = {
  getUsers,
  getUser,
};
