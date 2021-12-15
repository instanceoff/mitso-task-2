import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import menuRouter from './resources/menus/menu.router';
import dishRouter from './resources/dishes/dish.router';
import categoryRouter from './resources/categoryes/category.router';

import { logging, errorHandling } from './middlewares';

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const app = express();

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(logging);

app.use('/menus', menuRouter);

app.use('/categoryes', categoryRouter);

app.use('/dishes', dishRouter);

app.use(errorHandling);

export default app;
