import { Response, Request } from "express";

import VacunaPerro from "../models/modelVacunaPerro";

class ControllerVacunaPerro {
  public crearVacunas(res: Response) {
    VacunaPerro.create({
      nombre: "Moquillo canino",
    });

    VacunaPerro.create({
      nombre: "Hepatitis",
    });

    VacunaPerro.create({
      nombre: "Parvovirosis",
    });

    VacunaPerro.create({
      nombre: "Leptospirosis",
    });

    VacunaPerro.create({
      nombre: "Rabia",
    });
    return res.json("Vacunas creadas correctamente");
  }

  public async getVacunasPerro(req: Request, res: Response): Promise<Response> {
    const vacunas = await VacunaPerro.find();

    return res.json(vacunas);
  }

  public async deleteVacuna(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const vacuna = await VacunaPerro.findByIdAndRemove(id);

    return res.json({
      message: "Vacuna eliminada satisfactoriamente",
      vacuna,
    });
  }
}

export const controllerVacunaPerro = new ControllerVacunaPerro();
