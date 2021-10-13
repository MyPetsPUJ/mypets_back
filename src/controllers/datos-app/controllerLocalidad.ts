import { Response, Request } from "express";

import Localidad from "../../models/datos-app/modelLocalidad";

class ControllerLocalidad {
  public crearLocalidades(res: Response) {
    Localidad.create({
      nombre: "Usaquén",
    });

    Localidad.create({
      nombre: "Chapinero",
    });

    Localidad.create({
      nombre: "Santa Fé",
    });

    Localidad.create({
      nombre: "San Cristóbal",
    });

    Localidad.create({
      nombre: "Usme",
    });

    Localidad.create({
      nombre: "Tunjuelito",
    });

    Localidad.create({
      nombre: "Bosa",
    });

    Localidad.create({
      nombre: "Kennedy",
    });

    Localidad.create({
      nombre: "Fontibón",
    });

    Localidad.create({
      nombre: "Engativá",
    });

    Localidad.create({
      nombre: "Suba",
    });

    Localidad.create({
      nombre: "Barrios Unidos",
    });

    Localidad.create({
      nombre: "Teusaquillo",
    });

    Localidad.create({
      nombre: "Los Mártires",
    });

    Localidad.create({
      nombre: "Antonio Nariño",
    });

    Localidad.create({
      nombre: "Puente Aranda",
    });

    Localidad.create({
      nombre: "Candelaria",
    });

    Localidad.create({
      nombre: "Rafael Uribe Uribe",
    });

    Localidad.create({
      nombre: "Ciudad Bolívar",
    });

    Localidad.create({
      nombre: "Sumapaz",
    });

    return res.json({ message: "Localidades creadas de manera correcta" });
  }

  public async getLocalidades(req: Request, res: Response): Promise<Response> {
    const localidades = await Localidad.find();

    return res.json(localidades);
  }

  public async deleteLocalidad(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const localidad = await Localidad.findByIdAndRemove(id);

    return res.json({
      message: "Localidad eliminada satisfactoriamente",
      localidad,
    });
  }
}

export const controllerLocalidad = new ControllerLocalidad();
