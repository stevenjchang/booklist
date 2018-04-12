const express = require('express');
const router = require('express').Router();
const IP = 'localhost';
const PORT = '3000';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from z-server!');
})

app.listen(PORT, (err) => {
  if (err) {
    console.log('server failed');
  }
  console.log('server is listening on ${PORT}');
})

module.exports = app;