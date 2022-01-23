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

const getLast = () => {
  connection.execute('SELECT * FROM measurement ORDER BY measurement_id DESC LIMIT 1;')
    .then(([rows]) => {
      return rows;
    })
    .catch((err) => {
      console.error(err);
    });
};

const add = (temperature, humidity, timestamp, datetime) => {
  connection.execute('INSERT INTO measurement (temperature_value, humidity_value, time_stamp, date_time)VALUES(?, ?, ?, ?);', [temperature, humidity, timestamp, datetime])
    .then(([rows]) => {
      return rows;
    })
    .catch((err) => console.error(err))
}

module.exports = {
  getAll,
  getLast,
  add
};