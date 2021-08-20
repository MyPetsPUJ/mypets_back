import {Request, Response, NextFunction, json} from 'express';

const jwt = require('jsonwebtoken');



module.exports = (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        jwt.verify(token, "fundacion_key");
        next();
    }
    catch(error)
    {
        res.status(401).json({message: "Autenticación fallida"});
    }
};