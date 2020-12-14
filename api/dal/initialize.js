const db = require('../../data/Pool');

const sqlLoader = require('sql-loader');
const sql = sqlLoader('../sql');

async function initializeTables() {
  try {
    await db.query(sql.tables.users);
  } catch (err) {
    console.error(err);
  }
}

async function initializeDefaultUsers() {
  try {
    await db.query(sql.users.default_users);
  } catch (err) {
    console.error(err);
  }
}

async function initializeDatabase() {
  await initializeTables();
  console.log('tables in');
  await initializeDefaultUsers();
  console.log('default user in');
}

module.exports = {
  initializeDatabase,
};
