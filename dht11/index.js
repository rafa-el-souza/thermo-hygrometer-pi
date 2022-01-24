const sensor = require("node-dht-sensor").promises;

const { add } = require('../models/measurementModel');

const MODEL = 11;
const GPIO = 4;

const readSensor = () => sensor.read(MODEL, GPIO)
  .then((res) => {
    const timestamp = Date.now();
    const datetime = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    return { temperature: res.temperature, humidity: res.humidity, timestamp, datetime};
  })
  // .then((res) => {
  //   console.log(res);
  // })
  .catch((err) => console.error("Failed to read sensor data:", err));

const recordSensor = () => {
  setInterval(readSensor
    .then(({ temperature, humidity, timestamp, datetime }) => {
      add(temperature, humidity, timestamp, datetime)
    }), 5000);
};

module.exports = { readSensor, recordSensor};