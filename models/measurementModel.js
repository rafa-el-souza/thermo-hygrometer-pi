const pool = require('./connection');

const getAll = (req, res) => {
  pool.getConnection()
    .then(conn => {
      conn.query('SELECT * FROM measurement')
        .then((data) => {
          conn.end();
          return res.status(200).json(data.map((entry) => entry['meta'] ? null : entry));
        })
        .catch(err => {
          console.error(err);
          conn.end();
        })
    }).catch(err => console.error(err));
};

const getLast = (req, res) => {
  pool.getConnection()
    .then(conn => {
      conn.query('SELECT * FROM measurement ORDER BY measurement_id DESC LIMIT 1;')
        .then((data) => {
          conn.end();
          return res.status(200).json(data.map((entry) => entry['meta'] ? null : entry));
        })
        .catch(err => {
          console.error(err);
          conn.end();
        })
    }).catch(err => console.error(err));
};

const add = (temperature, humidity, timestamp, datetime) => {
  pool.getConnection()
    .then(conn => {
      conn.query('INSERT INTO measurement (temperature_value, humidity_value, time_stamp, date_time)VALUES(?, ?, ?, ?);', [temperature, humidity, timestamp, datetime])
        .then((res) => {
          console.log(res);
          conn.end();
        })
        .catch(err => {
          console.error(err);
          conn.end();
        })
    }).catch(err => console.error(err));
}

// getByDateTime

module.exports = {
  getAll,
  getLast,
  add
};
