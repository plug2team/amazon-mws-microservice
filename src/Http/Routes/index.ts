import { Router, Response, Request } from 'express';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import ensureAuthenticated from '../Middlewares/ensureAuthenticated';

const routes = Router();

// routes.use(ensureAuthenticated);

routes.get('/', (request: Request, response: Response) => {
    return response.json({
        message: 'Amazon MWS MicroService',
    });
});

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
