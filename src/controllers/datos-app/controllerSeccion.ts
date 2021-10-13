import { Response, Request, NextFunction } from "express";

import Seccion from "../../models/datos-app/modelSeccionPubli";

class ControllerSeccion {
  public crearSecciones(res: Response) {
    Seccion.create({
      nombre: "Adquisición",
    });

    Seccion.create({
      nombre: "Adultos",
    });

    Seccion.create({
      nombre: "Alimentación",
    });

    Seccion.create({
      nombre: "Cambios en mi mascota",
    });

    Seccion.create({
      nombre: "Cachorros",
    });

    Seccion.create({
      nombre: "Cuidados y bienestar",
    });

    Seccion.create({
      nombre: "Entrenamiento",
    });

    Seccion.create({
      nombre: "Nutrición",
    });

    Seccion.create({
      nombre: "Salud",
    });

    return res.json({ message: "Secciones creada correctamente" });
  }

  public async getSecciones(req: Request, res: Response): Promise<Response> {
    const secciones = await Seccion.find();

    return res.json(secciones);
  }
}

export const controllerSecciones = new ControllerSeccion();
