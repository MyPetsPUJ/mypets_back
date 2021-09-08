import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json('Unauthorized');

    const payload = jwt.verify(token, 'adoptante_key');
    console.log(payload)

    next();

}