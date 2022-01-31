DROP DATABASE IF EXISTS thermo_hygrometer_pi;

CREATE DATABASE thermo_hygrometer_pi;

USE thermo_hygrometer_pi;

CREATE TABLE measurement(
  measurement_id INT AUTO_INCREMENT PRIMARY KEY,
  temperature_value INT NOT NULL,
  humidity_value INT NOT NULL,
  time_stamp BIGINT NOT NULL,
  date_time DATETIME NOT NULL
) engine = InnoDB;

INSERT INTO measurement (measurement_id, temperature_value, humidity_value, time_stamp, date_time)
VALUES
  (1, 256, 80, 1, "2022/01/01 00:00:00"),
  (2, 257, 81, 2, "2022/01/01 00:00:05"),
  (3, 258, 81, 3, "2022/01/01 00:00:10"),
  (4, 259, 81, 4, "2022/01/01 00:00:15");
