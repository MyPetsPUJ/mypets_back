import { Response, Request } from "express";

import Localidad from "../models/modelLocalidad";

class ControllerLocalidad {
  public crearLocalidades(res: Response) {
    Localidad.create({
      nombre: "1. Usaquén",
    });

    Localidad.create({
      nombre: "2. Chapinero",
    });

    Localidad.create({
      nombre: "3. Santa Fé",
    });

    Localidad.create({
      nombre: "4. San Cristóbal",
    });

    Localidad.create({
      nombre: "5. Usme",
    });

    Localidad.create({
      nombre: "6. Tunjuelito",
    });

    Localidad.create({
      nombre: "7. Bosa",
    });

    Localidad.create({
      nombre: "8. Kennedy",
    });

    Localidad.create({
      nombre: "9. Fontibón",
    });

    Localidad.create({
      nombre: "10. Engativá",
    });

    Localidad.create({
      nombre: "11. Suba",
    });

    Localidad.create({
      nombre: "12. Barrios Unidos",
    });

    Localidad.create({
      nombre: "13. Teusaquillo",
    });

    Localidad.create({
      nombre: "14. Los Mártires",
    });

    Localidad.create({
      nombre: "15. Antonio Nariño",
    });

    Localidad.create({
      nombre: "16. Puente Aranda",
    });

    Localidad.create({
      nombre: "17. Candelaria",
    });

    Localidad.create({
      nombre: "18. Rafael Uribe Uribe",
    });

    Localidad.create({
      nombre: "19. Ciudad Bolívar",
    });

    Localidad.create({
      nombre: "20. Sumapaz",
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
