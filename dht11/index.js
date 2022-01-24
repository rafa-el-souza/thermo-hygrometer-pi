const sensor = require("node-dht-sensor").promises;

const { add } = require('../models/measurementModel');

const MODEL = 11;
const GPIO = 4;

const readSensor = () => sensor.read(MODEL, GPIO)
  .then((res) => {
    const timestamp = Date.now();
    const datetime = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    const entry = { temperature: res.temperature, humidity: res.humidity, timestamp, datetime };
    console.log(entry);
    return entry;
  })
  .catch((err) => console.error("Failed to read sensor data:", err));

const recordSensor = ({ temperature, humidity, timestamp, datetime }) => {
  readSensor()
    .then((res) => {
      add(temperature, humidity, timestamp, datetime);
    })
    .catch((err) => console.error(err))
}

const recordEvery = (seconds) => {
  setInterval(recordSensor, seconds * 1000);
};

module.exports = { readSensor, recordEvery};