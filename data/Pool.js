const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'docker',
//   host: '127.0.0.1',
//   database: 'api-dev',
//   password: 'docker',
//   port: 5432,
// });

console.log('TEST 1');
console.log(process.env.DATABASE_URL);
console.log('TEST 2');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
