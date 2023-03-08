const express = require('express');

const app = express();
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');

app.use(express.json());

app.use('/artists', artistRouter);
app.use('/albums', albumRouter);

app.get('/', (req, res) => {
  res.status(200).json(`Hello world!`);
});
module.exports = app;
