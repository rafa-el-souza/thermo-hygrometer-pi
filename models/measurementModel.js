const pool = require('./connection');

const getAll = () => {
  pool.getConnection()
    .then(conn => {

      conn.query('SELECT * FROM measurement')
        .then(([rows]) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          return rows;
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          console.error(err);
          conn.end();
        })

    }).catch(err => console.error(err));
};

const getLast = () => {
  pool.getConnection()
    .then(conn => {

      conn.query('SELECT * FROM measurement ORDER BY measurement_id DESC LIMIT 1;')
        .then(([rows]) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          return rows;
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
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
        .then(([rows]) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          return rows;
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          console.error(err);
          conn.end();
        })

    }).catch(err => console.error(err));
}

module.exports = {
  getAll,
  getLast,
  add
};

/*
 *pool.getConnection()
  .then(conn => {

    conn.query("SELECT 1 as val")
      .then((rows) => {
        console.log(rows); //[ {val: 1}, meta: ... ]
        //Table must have been created before 
        // " CREATE TABLE myTable (id int, val varchar(255)) "
        return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
      })
      .then((res) => {
        console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
        conn.end();
      })
      .catch(err => {
        //handle error
        console.log(err);
        conn.end();
      })

  }).catch(err => {
    //not connected
  });
*/