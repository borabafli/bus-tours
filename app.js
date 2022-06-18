const path = require('path');
const express = require("express");

const busRoutes = require('./routes/busRoute');
const app = express();


app.use(busRoutes);

app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render('500');
});

app.listen(3000);