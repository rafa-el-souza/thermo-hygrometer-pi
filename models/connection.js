const mySQL = require('mysql2');

const connection = mySQL.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'thermo_hygrometer_pi'
});

module.exports = connection;