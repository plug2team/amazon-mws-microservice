import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '../.env') });

interface ExpressInterface {
    port: number | string;
    ip: string;
}

interface EnvironmentInterface {
    env: number | string;
    jwt: string | any;
}

export default class Config {
    express: ExpressInterface;

    environment: EnvironmentInterface;

    constructor() {
        this.express = {
            port: process.env.PORT || 3000,
            ip: process.env.IP || '127.0.0.1',
        };

        this.environment = {
            env: process.env.NODE_ENV || 'development',
            jwt: process.env.JWT_SECRET,
        };
    }
}
