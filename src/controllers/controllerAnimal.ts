import { Request, Response, NextFunction } from "express";
import Animal from "../models/modelAnimal";

class ControllerAnimal {
  public dentroDeAnimal(req: Request, res: Response, next: NextFunction) {
    res.send([1, 2, 3, 4]);
    console.log("Dentro de crear animal");
    next();
  }

  public crearAnimalPerro(req: Request, res: Response, next: NextFunction) {
    console.log("Creando Animal");
    console.log(req.body);

    const animal = new Animal({
      nombre: req.body.nombre,
      edad: req.body.edad,
      raza: req.body.raza,
      sexo: req.body.sexo,
      tamano: req.body.tamano,
      color_ojos: req.body.color_ojos,
      tipo_pelaje: req.body.tipo_pelaje,
      situacion: req.body.situacion,
      desparasitado: req.body.desparasitado,
      ultima_vac: req.body.ultima_vac,
      descripcion: req.body.descripcion,
      esquema_vac: req.body.esquema_vac,
      tipo_animal: "Perro",
    });
    console.log(animal);
    animal
      .save()
      .then((result) => {
        res.status(200).json({
          message: "Animal perro creado",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  }

  public crearAnimalGato(req: Request, res: Response, next: NextFunction) {
    console.log("Creando Animal");
    console.log(req.body);

    const animal = new Animal({
      nombre: req.body.nombre,
      edad: req.body.edad,
      raza: req.body.raza,
      sexo: req.body.sexo,
      tamano: req.body.tamano,
      color_ojos: req.body.color_ojos,
      tipo_pelaje: req.body.tipo_pelaje,
      situacion: req.body.situacion,
      desparasitado: req.body.desparasitado,
      ultima_vac: req.body.ultima_vac,
      descripcion: req.body.descripcion,
      esquema_vac: req.body.esquema_vac,
      tipo_animal: "Gato",
    });
    console.log(animal);
    animal
      .save()
      .then((result) => {
        res.status(200).json({
          message: "Animal gato creado",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  }
}

export const controllerAnimal = new ControllerAnimal();
