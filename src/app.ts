import express from 'express';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  public middlewares() {
    this.server.use(express.json());
  }

  public routes() {
    this.server.use(routes);
  }
}

export default new App().server;

