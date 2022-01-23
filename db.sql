DROP DATABASE IF EXISTS thermo_hygrometer_pi;

CREATE DATABASE thermo_hygrometer_pi;

USE thermo_hygrometer_pi;

CREATE TABLE measurement(
  measurement_id INT AUTO_INCREMENT PRIMARY KEY,
  temperature_value INT NOT NULL,
  humidity_value INT NOT NULL,
  measured_at INT NOT NULL
) engine = InnoDB;

INSERT INTO measurement (measurement_id, temperature_value, humidity_value, measured_at)
VALUES
  (1, 256, 80, 1),
  (2, 257, 81, 2),
  (3, 258, 81, 3),
  (4, 259, 81, 4);
