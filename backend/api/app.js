const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);

export default app;