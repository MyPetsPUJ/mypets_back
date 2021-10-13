import { Response, Request, NextFunction } from "express";

import DatosAnimal from "../../models/datos-app/modelDatosAnimal";

class ControllerDatosAnimal {
  public crearDatosAnimal(res: Response) {
    DatosAnimal.create({
      edad: "Menos de 1 mes",
    });

    DatosAnimal.create({
      edad: "1 a 3 meses",
    });

    DatosAnimal.create({
      edad: "3 a 5 meses",
    });

    DatosAnimal.create({
      edad: "5 a 7 meses",
    });

    DatosAnimal.create({
      edad: "7 a 9 meses",
    });

    DatosAnimal.create({
      edad: "9 a 12 meses",
    });

    DatosAnimal.create({
      edad: "1 año",
    });

    DatosAnimal.create({
      edad: "2 años",
    });

    DatosAnimal.create({
      edad: "3 años",
    });

    DatosAnimal.create({
      edad: "4 años",
    });

    DatosAnimal.create({
      edad: "5 años",
    });

    DatosAnimal.create({
      edad: "6 años",
    });

    DatosAnimal.create({
      edad: "7 años",
    });

    DatosAnimal.create({
      edad: "8 años",
    });

    DatosAnimal.create({
      edad: "9 años",
    });

    DatosAnimal.create({
      edad: "10 años",
    });

    DatosAnimal.create({
      edad: "11 años",
    });

    DatosAnimal.create({
      edad: "12 años",
    });

    DatosAnimal.create({
      edad: "13 años",
    });

    DatosAnimal.create({
      edad: "14 años",
    });

    DatosAnimal.create({
      edad: "15 años",
    });

    DatosAnimal.create({
      edad: "Más de 15 años",
    });

    DatosAnimal.create({
      tipo: "Perro",
    });

    DatosAnimal.create({
      tipo: "Gato",
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

    return res.json(datosAnimal);
  }

  public async deleteDatosAnimal(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const dato = await DatosAnimal.findByIdAndRemove(id);

    return res.json({
      message: "Dato eliminado satisfactoriamente",
      dato,
    });
  }
}

export const controllerDatosAnimal = new ControllerDatosAnimal();
