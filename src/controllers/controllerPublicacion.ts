import { Request, Response, NextFunction } from "express";
import Publicacion from "../models/modelPublicacion";

class ControllerPublicacion{

    public crearPublicacion(req: Request, res: Response, next: NextFunction){
        console.log("Creando publicación");
        console.log(req.body);
        
    }



}


export const controllerPublicacion = new ControllerPublicacion();