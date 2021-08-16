import express, {Request, Response, NextFunction} from 'express';

class ControllerLogin{

    public dentroLogin(req: Request, res: Response, next: NextFunction){
        res.send([9,9,9]);
        console.log('Dentro de login');
        next();
    }

}

export const controllerLogin = new ControllerLogin();

