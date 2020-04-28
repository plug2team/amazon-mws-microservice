import { resolve } from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: resolve(__dirname, '../.env') });

interface expressInterface {
    port: number | string;
    ip: string;
}

interface environmentInterface {
    env: number | string;
    dbDir: string | any;
}

export default class Config {
    express: expressInterface;
    environment: environmentInterface;

    constructor() {
        this.express = {
            port: process.env.PORT || 3000,
            ip: process.env.IP || '127.0.0.1',
        };

        this.environment = {
            env: process.env.NODE_ENV || 'development',
            dbDir: process.env.DB_DIR,
        };
    }
}
