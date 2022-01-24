const express = require('express');
const { recordSensor } = require('./dht11');
const { getAll, getLast, add } = require('./models/measurementModel');
const app = express();

const PORT = 3000;

recordSensor();

app.get('/all', getAll);

app.get('/last', getLast);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` );
});