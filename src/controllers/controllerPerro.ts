import {Request, Response, NextFunction} from 'express';
import Perro from '../models/modelPerro';

class ControllerPerro{

    public crearPerro(req: Request, res: Response, next: NextFunction){

        console.log("Creando perro");
        console.log(req.body);
    const perro = new Perro({
        nombre: req.body.nombre,
        edad: req.body.edad,
        raza: req.body.raza,
        sexo: req.body.sexo,
        tamano: req.body.tamano,
        color_ojos: req.body.color_ojos,
        tipo_pelaje: req.body.tipo_pelaje,
        color_pelaje: req.body.color_pelaje,
        situacion: req.body.situacion,
        desparasitado: req.body.desparasitado,
        ultima_vac: req.body.ultima_vac,
        descripcion: req.body.descripcion,
        esquema_vac: req.body.esquema_vac
    });
    console.log(perro)
    perro.save()
    .then(result =>{
        res.status(201).json({
            message: 'Perro creado',
            result: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });

    }

    public dentroPerro(req: Request, res: Response, next: NextFunction){
        res.send([4,4,4]);
        console.log("Dentro de crear perro");
        //next();
    }

}

export const controllerPerro = new ControllerPerro();