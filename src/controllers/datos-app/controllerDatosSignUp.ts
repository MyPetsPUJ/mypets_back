import { Response, Request, NextFunction } from "express";

import Genero from "../../models/datos-app/adoptante&fundacion/modelGenero";
import Localidad from "../../models/datos-app/adoptante&fundacion/modelLocalidad";
import TipoDoc from "../../models/datos-app/adoptante&fundacion/modelTipoDoc";

class ControllerDatosSignUp {
  public crearGenero(req: Request, res: Response) {
    const genero = new Genero({
      nombre: req.body.nombre,
    });

    genero.save().then((respuesta) => {
      return res
        .status(201)
        .json({ message: "Genero creado correctamente", respuesta });
    });
  }

  public crearTipoDoc(req: Request, res: Response) {
    const tipoDoc = new TipoDoc({
      nombre: req.body.nombre,
    });

    tipoDoc.save().then((respuesta) => {
      return res.status(201).json({
        message: "Tipo de documento creado correctamente",
        respuesta,
      });
    });
  }

  public crearLocalidad(req: Request, res: Response) {
    const localidad = new Localidad({
      nombre: req.body.nombre,
    });

    localidad.save().then((respuesta) => {
      return res
        .status(201)
        .json({ message: "Localidad creada correctamente", respuesta });
    });
  }

  public async getDatosSignUp(req: Request, res: Response): Promise<Response> {
    const generos = await Genero.find();
    const tipo_docs = await TipoDoc.find();
    const localidades = await Localidad.find();

    return res
      .status(200)
      .json({ message: "Datos ", generos, tipo_docs, localidades });
  }
}

export const controllerDatosSignUp = new ControllerDatosSignUp();
