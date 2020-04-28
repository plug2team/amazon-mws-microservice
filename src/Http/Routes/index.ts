import { Router, Response, Request } from 'express';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({
        message: 'Amazon MWS MicroService',
    });
});

routes.use('/users', usersRouter);

export default routes;
