import { Response, Request, NextFunction } from "express";

import TipoDoc from "../../models/datos-app/modelTipoDoc";

class ControllerTipoDoc {
  public crearTipoDoc(res: Response) {
    TipoDoc.create({
      nombre: "Cédula de ciudadanía",
    });

    TipoDoc.create({
      nombre: "Cédula de extranjería",
    });

    TipoDoc.create({
      nombre: "Pasaporte",
    });

    return res.json({ message: "Tipo de documentos creados" });
  }

  public async getTipoDocumentos(
    req: Request,
    res: Response
  ): Promise<Response> {
    const tipodocs = await TipoDoc.find();

    
    return res.json(tipodocs);
  }
}

export const controllerTipoDoc = new ControllerTipoDoc();
