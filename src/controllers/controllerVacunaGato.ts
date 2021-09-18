import { Response, Request } from "express";

import VacunaGato from "../models/modelVacunaGato";

class ControllerVacunaGato {
  public crearVacunas(res: Response) {
    VacunaGato.create({
      nombre: "Rabia",
    });

    VacunaGato.create({
      nombre: "Trivalente",
    });

    VacunaGato.create({
      nombre: "Rinotraqueitis",
    });

    VacunaGato.create({
      nombre: "Calicivirus",
    });

    VacunaGato.create({
      nombre: "Leucemia Felina",
    });

    VacunaGato.create({
      nombre: "Panleucopenia",
    });

    return res.status(200).json("Vacunas creadas correctamente");
  }

  public async getVacunasGato(req: Request, res: Response): Promise<Response> {
    const vacunas = await VacunaGato.find();

    return res.json(vacunas);
  }

  public async deleteVacuna(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const vacuna = await VacunaGato.findByIdAndRemove(id);

    return res.json({
      message: "Vacuna eliminada satisfactoriamente",
      vacuna,
    });
  }
}

export const controllerVacunaGato = new ControllerVacunaGato();
