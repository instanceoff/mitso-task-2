const express = require('express');
const menuRouter = require('./resources/menus/menu.router');
const dishRouter = require('./resources/dishes/dish.router');
const categoryRouter = require('./resources/categoryes/category.router');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/menus', menuRouter);

app.use('/categoryes', categoryRouter);

app.use('/dishes', dishRouter);

module.exports = app;
