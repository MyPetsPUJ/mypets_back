import { Response, Request, NextFunction } from "express";

import DatosAnimal from "../../models/datos-app/modelDatosAnimal";

class ControllerDatosAnimal {
  public crearDatosAnimal(res: Response) {
    DatosAnimal.create({
      edad: [
        "Menos de 1 mes",
        "1 a 3 Meses",
        "3 a 5 Meses",
        "5 a 7 Meses",
        "7 a 9 Meses",
        "9 a 12 Meses",
        "1 año",
        "2 años",
        "3 años",
        "4 años",
        "5 años",
        "6 años",
        "7 años",
        "8 años",
        "9 años",
        "10 años",
        "11 años",
        "12 años",
        "13 años",
        "14 años",
        "15 años",
        "Más de 15 años",
      ],
    });

    DatosAnimal.create({
      tipo: ["Perro", "Gato"],
    });

    DatosAnimal.create({
      genero: "Macho",
    });

    DatosAnimal.create({
      genero: "Hembra",
    });

    DatosAnimal.create({
      tamano: "Pequeño",
    });

    DatosAnimal.create({
      tipo: "Mediano",
    });

    DatosAnimal.create({
      tipo: "Grande",
    });

    DatosAnimal.create({
      color_ojos: "Azul",
    });

    DatosAnimal.create({
      color_ojos: "Verde",
    });

    DatosAnimal.create({
      color_ojos: "Café",
    });

    DatosAnimal.create({
      color_ojos: "Dorado",
    });

    DatosAnimal.create({
      color_ojos: "Negro",
    });

    DatosAnimal.create({
      color_ojos: "Heterocromía",
    });

    DatosAnimal.create({
      tipo_pelaje: "Pelaje duro",
    });

    DatosAnimal.create({
      tipo_pelaje: "Pelaje rizado",
    });

    DatosAnimal.create({
      tipo_pelaje: "Pelaje corto",
    });

    DatosAnimal.create({
      tipo_pelaje: "Pelaje largo",
    });

    DatosAnimal.create({
      desparasitado: "Sí",
    });

    DatosAnimal.create({
      desparasitado: "No",
    });

    DatosAnimal.create({
      situacion: "Esterilizado",
    });

    DatosAnimal.create({
      situacion: "Sin esterilizar",
    });

    return res.json({ message: "Datos de animal creados de manera correcta" });
  }

  public async getDatosAnimal(req: Request, res: Response): Promise<Response> {
    const datosAnimal = await DatosAnimal.find();
    console.log(datosAnimal);
    return res.json(datosAnimal);
  }

  public async deleteDatosAnimal(
    req: Request,
    res: Response
  ): Promise<Response> {
    const id = req.params.id;
    const dato = await DatosAnimal.findByIdAndRemove(id);

    return res.json({
      message: "Dato eliminado satisfactoriamente",
      dato,
    });
  }
}

export const controllerDatosAnimal = new ControllerDatosAnimal();
