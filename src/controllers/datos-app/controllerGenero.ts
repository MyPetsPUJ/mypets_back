import { Response, Request, NextFunction } from "express";

import Genero from "../../models/datos-app/modelGenero";

class ControllerGenero {
  public crearGeneros(res: Response) {
    Genero.create({
      nombre: "Masculino",
    });

    Genero.create({
      nombre: "Femenino",
    });

    return res.json({message: "Generos creados correctamente"})
  }

  public async getGeneros(req: Request, res: Response): Promise<Response> {
    const generos = await Genero.find();

    return res.json(generos);
  }
}

export const controllerGenero = new ControllerGenero();
