const express = require('express');
const status = require('./statusRouter.js');
const home = require('./homeRouter.js');

module.exports = app => {
    app.use(
      express.json(),
      status,
      home
    );
  };