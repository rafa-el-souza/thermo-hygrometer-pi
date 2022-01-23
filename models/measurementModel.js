const { execute } = require('./connection');
const connection = require('./connection');

const getAll = () => {
  connection.execute('SELECT * FROM measurement')
    .then(([rows]) => {
      return rows;
    })
    .catch((err) => {
      console.error(err);
    });
};

/*
 *const getCurrent = () => {
 *`'SELECT * FROM measurement
 *  ORDER BY measurement_id DESC
 *  LIMIT 1;
 * '`
 *};
*/

/*
 *const create = () => {
 *`'INSERT INTO measurement (temperature_value, humidity_value, measured_at)
 * VALUES(?, ?, ?); 
 * '`
 *};
*/

module.exports = {
  getAll
};