import {Request, Response, NextFunction} from 'express';
import Adoptante from '../models/modelAdoptante';

class ControllerAdoptante{

    public dentroAdoptante(req: Request, res: Response, next: NextFunction){

        res.send([1,2,3]);
        console.log("Dentro de adoptante");
        next();
    }

    public crearAdoptante(req: Request, res: Response, next: NextFunction){

        //bcrypt.hash(req.body.password, 10)
        //.then(function(hash) {
        console.log("Creando adoptante");
        console.log(req.body);
    const adoptante = new Adoptante({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            fecha_nacimiento: req.body.fecha_nacimiento,
            genero: req.body.genero,
            localidad: req.body.localidad,
            correo: req.body.correo,
            num_celular: req.body.num_celular,
            password: req.body.password,
            tipo_usuario: 'Adoptante'
        });
        console.log(adoptante)
        adoptante.save()
        .then((result:any) => {
            res.status(201).json({
                message: 'Adoptante creado',
                result: result
            });
        })
        .catch((err:any) => {
            res.status(500).json({
                error: err
            });
        });
    //});

    }

}


export const controllerAdoptante = new ControllerAdoptante();