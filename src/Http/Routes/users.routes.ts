import { Router, Request, Response } from 'express';
import UserController from '../Controllers/UserController';

const userController = new UserController();

const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) =>
    userController.createUser(request, response)
);

usersRouter.delete('/:uuid', async (request, response) => {
    userController.deleteUser(request, response);
});

export default usersRouter;
