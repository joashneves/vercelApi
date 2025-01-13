const express = require('express');
const status = require('./statusRouter.js');
const home = require('./homeRouter.js');
const user = require('./UserRouter.js');

module.exports = app => {
    app.use(
      express.json(),
      status,
      home,
      user
    );
  };