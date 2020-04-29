import { Request, Response } from 'express';
import AuthenticateUserService from '../../Domain/User/Services/AuthenticateUserService';

export default class SessionController {
    public async createSession(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { email, password } = request.body;

            const authenticateUser = new AuthenticateUserService();

            const { user, token } = await authenticateUser.execute({
                email,
                password,
            });

            delete user.password;

            return response.json({ user, token });
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}
