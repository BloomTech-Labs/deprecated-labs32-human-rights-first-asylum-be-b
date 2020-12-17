const db = require('../../data/Pool');
const sqlLoader = require('sql-loader');

const sql = sqlLoader('../sql');

async function getUsers() {
  const { rows } = await db.query(sql.users.get_users);
  return rows;
}

async function getUserById(id) {
  const { rows } = await db.query(sql.users.get_user_by_id, [id]);
  return rows;
}

async function getUserByEmail(email) {
  const { rows } = await db.query(sql.users.get_user_by_email, [email]);
  return rows;
}

async function createUser({
  firstName,
  lastName,
  password,
  email,
  permissions_flag,
  date_created,
}) {
  const { rows } = await db.query(sql.users.create_user, [
    firstName,
    lastName,
    password,
    email,
    permissions_flag,
    date_created,
  ]);
  return rows;
}

async function updateUser({
  id,
  firstName,
  lastName,
  password,
  email,
  permissions_flag,
}) {
  const { rows } = await db.query(sql.users.update_user, [
    id,
    firstName,
    lastName,
    password,
    email,
    permissions_flag,
  ]);
  return rows;
}

async function deleteUser(id) {
  const { rows } = await db.query(sql.users.delete_user, [id]);
  return rows;
}

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
