import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../Models/User';
import UserRequestInterface from '../../../Infrastructure/Interfaces/UserRequestInterface';

class CreateUserService {
    public async execute({
        name,
        email,
        password,
    }: UserRequestInterface): Promise<User> {
        const usersRepository = getRepository(User);

        const checkUsersExists = await usersRepository.findOne({
            where: { email },
        });

        if (checkUsersExists) {
            throw new Error('Email Address Already Used.');
        }

        const hashedPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;
