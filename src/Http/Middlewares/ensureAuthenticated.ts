import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import Config from '../../configs';

const authConfig = new Config().environment;

interface TokenPayload {
    iat: number;
    exp: string;
    sub: string;
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('JWT Token is Missing.');
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, 'acf7ef943fdeb3cbfed8dd0d8f584731');

        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub,
        };

        next();
    } catch (err) {
        console.log(err);
        // throw new Error('Invalid JWT Token.');
    }
}
