import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({hello: "World"}))

export default routes;
