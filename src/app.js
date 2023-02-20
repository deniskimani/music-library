const express = require('express');

const app = express();
const artistRouter = require('./routes/artist');

app.use(express.json());

app.use('/artists', artistRouter);

app.get('/', (req, res) => {
  res.status(200).json({ result: `Hello world!` });
});
module.exports = app;
