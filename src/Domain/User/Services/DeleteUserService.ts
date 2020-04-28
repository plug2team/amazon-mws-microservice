import { getRepository } from 'typeorm';
import User from '../Models/User';
import AppError from '../../../Infrastructure/Errors/AppError';

interface Request {
    id: string;
}

class DeleteUserService {
    public async execute({ id }: Request): Promise<void> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(id);

        if (!user) {
            throw new AppError('User not found');
        }

        await usersRepository.delete(id);
    }
}

export default DeleteUserService;
