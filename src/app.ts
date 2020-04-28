import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import errorHandler from 'errorhandler';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import routes from './Http/Routes';

dotenv.config();

class App {
    public server: Application;

    constructor() {
        this.server = express();
        this.config();
        this.routes();
    }

    public config() {
        this.server.use(express.static(path.join(__dirname, 'public')));
        this.server.use(logger('dev'));
        this.server.use(bodyParser.json());
        this.server.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );

        this.server.use(function (
            err: any,
            req: express.Request,
            res: express.Response,
            next: express.NextFunction
        ) {
            err.status = 404;
            next(err);
        });

        this.server.use(errorHandler());
    }

    private routes() {
        this.server.use(routes);
    }
}

export default new App().server;
