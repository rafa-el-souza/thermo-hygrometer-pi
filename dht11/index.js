const sensor = require("node-dht-sensor").promises;

const MODEL = 11;
const GPIO = 4;

const readSensor = () => sensor.read(MODEL, GPIO)
  .then((res) => {
    const timestamp = Date.now();
    const datetime = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    console.log(
      `temp: ${res.temperature.toFixed(1)}°C, ` +
      `humidity: ${res.humidity.toFixed(1)}%`);
    return { temperature: res.temperature, humidity: res.humidity, timestamp, datetime};
  })
  .catch((err) => console.error("Failed to read sensor data:", err));

readSensor();

module.exports = readSensor;