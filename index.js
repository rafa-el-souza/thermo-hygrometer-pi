const express = require('express');
const { recordEvery } = require('./dht11');
const { getAll, getLast } = require('./models/measurementModel');
const app = express();

const PORT = 3000;

recordEvery(10);

app.get('/all', getAll);

app.get('/last', getLast);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` );
});