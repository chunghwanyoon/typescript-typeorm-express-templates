import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.route';
import validateEnv from './utils/validateEnv';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import 'dotenv/config';

/**
 * connection_name: at ormconfig.json
 */
createConnection(process.env.NODE_ENV)
  .then(async (connetion) => {
    validateEnv();
    const app = new App([new IndexRoute()]);
    app.listen();
  })
  .catch((err) => console.log(err));
