import { Response, Request } from "express";

import Vacuna from "../models/modelVacuna";

class ControllerVacuna {
  public crearVacunas(res: Response) {
    Vacuna.create({
      nombre: "Moquillo canino",
    });

    Vacuna.create({
      nombre: "Hepatitis",
    });

    Vacuna.create({
      nombre: "Parvovirosis",
    });

    Vacuna.create({
      nombre: "Leptospirosis",
    });

    Vacuna.create({
      nombre: "Rabia",
    });

    Vacuna.create({
      nombre: "Leucemia viral felina",
    });

    Vacuna.create({
      nombre: "Triple felina",
    });

    Vacuna.create({
      nombre: "Segunda dosis leucemia",
    });

    Vacuna.create({
      nombre: "Refuerzo triple felina",
    });
  }

  public async getVacunas(req: Request, res: Response): Promise<Response> {
    const vacunas = await Vacuna.find();
    return res.json(vacunas);
  }

  public async deleteVacuna(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const vacuna = await Vacuna.findByIdAndRemove(id);

    return res.json({
      message: "Vacuna eliminada satisfactoriamente",
      vacuna,
    });
  }
}

export const controllerVacuna = new ControllerVacuna();
