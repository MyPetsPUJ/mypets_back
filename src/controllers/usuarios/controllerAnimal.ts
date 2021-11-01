import { Request, Response, NextFunction } from "express";

import Animal from "../../models/usuarios/modelAnimal";
import Fundacion from "../../models/usuarios/modelFundacion";
import config from "../../lib/helpers";

import fs from "fs-extra";
import path from "path";
import jwt from "jsonwebtoken";

class ControllerAnimal {
  public async crearAnimalPerro(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log("Creando Animal");
    console.log(req.body);
    console.log(req.file);

    const token: string = req.header("auth-token")!;
    const decoded = jwt.verify(token, config.SECRET_KEY);

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
      urlImg: req.file?.path,
      esquema_vac: req.body.esquema_vac,
      tipo_animal: "Perro",
      ownerFundacion: decoded,
      enAdopcion: false,
      adoptado: false,
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
    console.log("Este es el id del perro creado: ", animal._id);

    const animalUpdate = await Fundacion.findByIdAndUpdate(
      decoded,
      { $push: { animales: animal._id } },
      { new: true, useFindAndModify: false }
    );

    console.log("Fundación actualizada correctamente", animalUpdate);
  }

  public async crearAnimalGato(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log("Creando Animal");
    console.log(req.body);

    const token: string = req.header("auth-token")!;
    const decoded = jwt.verify(token, config.SECRET_KEY);

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
      urlImg: req.file?.path,
      esquema_vac: req.body.esquema_vac,
      tipo_animal: "Gato",
      ownerFundacion: decoded,
      enAdopcion: false,
      adoptado: false,
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
    console.log("Este es el id del gato creado: ", animal._id);

    const animalUpdate = await Fundacion.findByIdAndUpdate(
      decoded,
      { $push: { animales: animal._id } },
      { new: true, useFindAndModify: false }
    );

    console.log("Fundación actualizada correctamente", animalUpdate);
  }

  public async getAnimales(req: Request, res: Response) {
    const animales = await Animal.find();
    return res.json(animales);
  }

  public async populateAnimales(req: Request, res: Response) {
    // const token: string = req.header("auth-token")!;
    // const decoded = jwt.verify(token, config.SECRET_KEY);

    // console.log("Este es el token: ", decoded);

    const id = req.params.id;
    const resultado = await Fundacion.findById(id).populate("animales");
    const animales = resultado!.animales;

    return res.json({ resultado, animales });
  }

  public async getAnimal(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const animal = await Animal.findById(id);
    return res.json(animal);
  }

  public async deleteAnimal(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const animal = await Animal.findByIdAndRemove(id);

    if (animal) {
      fs.unlink(path.resolve(animal.urlImg));
    }
    return res.json({
      message: "Animal eliminado satisfactoriamente",
      animal,
    });
  }

  public async updateAnimal(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const {
      nombre,
      edad,
      raza,
      sexo,
      tamano,
      color_ojos,
      tipo_pelaje,
      situacion,
      desparasitado,
      ultima_vac,
      descripcion,
      esquema_vac,
    } = req.body;

    const urlImg = req.file?.path;

    if(!urlImg){
      const updatedAnimal = await Animal.findByIdAndUpdate(
        id,
        {
          nombre,
          edad,
          raza,
          sexo,
          tamano,
          color_ojos,
          tipo_pelaje,
          situacion,
          desparasitado,
          ultima_vac,
          descripcion,
          esquema_vac,
        },
        { new: true }
      );
      return res.json({
        message: "Animal actualizado correctamente",
        updatedAnimal,
      });
    }else{
      const updatedAnimal = await Animal.findByIdAndUpdate(
        id,
        {
          nombre,
          edad,
          raza,
          sexo,
          tamano,
          color_ojos,
          tipo_pelaje,
          situacion,
          desparasitado,
          ultima_vac,
          descripcion,
          esquema_vac,
          urlImg
        },
        { new: true }
      );
      return res.json({
        message: "Animal actualizado correctamente",
        updatedAnimal,
      });
    }

    
  }
}

export const controllerAnimal = new ControllerAnimal();
