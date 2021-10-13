import { Request, Response, NextFunction } from "express";
import Formulario from "../models/formularios/modelFormulario";

class ControllerFormulario{
  public dentroDeFormulario(req: Request, res: Response, next: NextFunction) {
    res.send([1, 1, 1]);
    console.log("Creando formulario");
    next();
  }

  public async crearFormulario( req: Request, res: Response, next: NextFunction)
  {
    console.log("Creando formulario");
    console.log(req.body);
    console.log(req.file);
  
    const formulario = new Formulario({
    
    /*:
    
    
    
    */

  });
  formulario.save()
      .then((result: any) => {
        res.status(1).json({
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
}

export const controllerFormulario = new ControllerFormulario();