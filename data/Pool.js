const { Pool } = require('pg');

const pool = new Pool({
  user: 'docker',
  host: '127.0.0.1',
  database: 'api-dev',
  password: 'docker',
  port: 5432,
});

module.exports = pool;
