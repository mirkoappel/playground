import express from 'express';
//const express = require('express')

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/foo', (req, res) => {
  res.send('Hello from server.js at route /foo')
  console.log("Oho");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})