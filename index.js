const express = require('express');
const { getAll } = require('./models/measurementModel');
const app = express();

const PORT = 3000;

app.get('/', getAll);

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}` );
});