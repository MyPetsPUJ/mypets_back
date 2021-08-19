import {Request, Response, NextFunction} from 'express';
import Fundacion from '../models/modelFundacion';

class ControllerFundacion{

    public dentroFundacion(req: Request, res: Response, next: NextFunction){

        res.send([4,5,6]);
        console.log("Dentro de fundacion");
        next();
    }

    public crearFundacion(req: Request, res: Response, next: NextFunction){

        //bcrypt.hash(req.body.password, 10)
        //.then(function(hash) {
        console.log("Creando fundacion");
        console.log(req.body);
    const fundacion = new Fundacion({
        nombreFund: req.body.nombreFund,
        nombreEncar: req.body.nombreEncar,
        apellidosEncar: req.body.apellidosEncar,
        tipo_doc: req.body.tipo_doc,
        num_doc: req.body.num_doc,
        fecha_creacion: req.body.fecha_creacion,
        localidad: req.body.localidad,
        correo: req.body.correo,
        num_celular: req.body.num_celular,
        password: req.body.password,
        tipo_usuario: 'Fundacion'
      });
      console.log(fundacion)
      fundacion.save()
      .then((result:any) => {
          res.status(201).json({
              message: 'Fundacion creada',
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


export const controllerFundacion = new ControllerFundacion();