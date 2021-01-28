const { Pool } = require('pg');

let pool = new Pool({
  user: 'docker',
  host: '127.0.0.1',
  database: 'api-dev',
  password: 'docker',
  port: 5432,
});

if (process.env.DB_ENV === 'production') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

module.exports = pool;
