import { Request, Response, NextFunction } from "express";
import SolicitudAdopcion from "../models/solicitud-adopcion/modelSolicitudAdopcion"; 
import Animal from "../models/usuarios/modelAnimal";


class ControllerSolicitudAdopcion{
  public async crearSolicitud( req: Request, res: Response, next: NextFunction){
    console.log("Creando solicitud");
    const solicitud = new SolicitudAdopcion({
      //idAdoptante : req.body.idAdoptante, //??????
      idFundacion : req.body.animal.ownerFundacion,
      idAnimal : req.body.animal._id,
      //idFormulario : req.body.idFormulario, //Momentaneamente inhabilitado
      estado : "En espera",
      fecha_solicitud: req.body.fecha

    });
    console.log(solicitud);
    solicitud
      .save()
      .then((result: any) => {
        res.status(201).json({
          message: "Solicitud creada",
          result: result,
        });
      })
      .catch((err: any) => {
        res.status(500).json({
          error: err,
        });
      });
  }
  public async getSolicitudes( req: Request, res: Response): Promise<Response> {
    const solicitudes = await SolicitudAdopcion.find();
    return res.json(solicitudes);
  }
};
export const controllerSolicitudAdopcion= new ControllerSolicitudAdopcion();

