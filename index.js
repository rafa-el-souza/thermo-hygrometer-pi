const express = require('express');
const { getAll, getLast, add } = require('./models/measurementModel');
const app = express();

const PORT = 3000;

app.get('/', getAll);

app.get('/last', getLast);

app.post('/', add);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}` );
});