const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'myPassword',
  connectionLimit: 5,
  database: 'thermo_hygrometer_pi'
});

module.exports = pool;
