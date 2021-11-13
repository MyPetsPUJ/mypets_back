import { Request, Response, NextFunction } from "express";

import Animal from "../../models/usuarios/modelAnimal";
import Adoptante from "../../models/usuarios/modelAdoptante";
import Fundacion from "../../models/usuarios/modelFundacion";
import config from "../../lib/helpers";
var mongoose = require("mongoose");

import fs from "fs-extra";
import path from "path";
import jwt from "jsonwebtoken";
import modelAdoptante from "../../models/usuarios/modelAdoptante";

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
        res.status(201).json({
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
        res.status(201).json({
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
    return res.status(200).json(animales);
  }

  public async populateAnimales(req: Request, res: Response) {
    // const token: string = req.header("auth-token")!;
    // const decoded = jwt.verify(token, config.SECRET_KEY);

    // console.log("Este es el token: ", decoded);

    const id = req.params.id;
    const resultado = await Fundacion.findById(id).populate("animales");
    const animales = resultado!.animales;

    return res.status(200).json({ resultado, animales });
  }

  public async getAnimal(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const animal = await Animal.findById(id);
    return res.status(200).json(animal);
  }

  public async getAnimalesAdoptados(
    req: Request,
    res: Response
  ): Promise<Response> {
    const animales = await Animal.find();
    var animalesAdoptados: any[] = [];
    //*********************** */

    for (var animal of animales) {
      if (animal.enAdopcion == true) {
        animalesAdoptados.push(animal);
      }
    }
    return res.status(200).json(animalesAdoptados);

    /*************************** */
  }

  public async deleteAnimal(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;

    const animal = await Animal.findByIdAndRemove(id);

    const fundacionID = animal?.ownerFundacion;

    const fundacion = await Fundacion.findByIdAndUpdate(
      fundacionID,
      { $pull: { animales: animal?._id } },
      { new: true, useFindAndModify: false }
    );

    if (animal) {
      try {
        fs.unlink(path.resolve(animal.urlImg));
      } catch (error) {
        console.log("No existe el archivo", error);
      }
    }
    return res.status(200).json({
      message: "Animal eliminado satisfactoriamente",
      animal,
    });
  }

  public async updateAdopcionAnimal(
    req: Request,
    res: Response
  ): Promise<Response> {
    const id = req.params.id;
    const idDueno = req.body.idDueno;
    const animal = await Animal.findByIdAndUpdate(
      id,
      {
        $set: {
          adoptado: true,
          ownerAdoptante: mongoose.Types.ObjectId(idDueno),
        },
      },
      { new: true, useFindAndModify: false }
    );
    console.log(await Adoptante.findById(idDueno));

    const adoptante = await Adoptante.findByIdAndUpdate(
      idDueno,
      { $push: { animalesAdoptados: id } },
      { new: true, useFindAndModify: false }
    );

    return res.status(200).json({
      message: " actualizado satisfactoriamente",
      adoptante,
    });
  }

  public async updateEstadoAnimal(
    req: Request,
    res: Response
  ): Promise<Response> {
    const id = req.params.id;
    const estado = req.body.nuevoEstado;
    const animal = await Animal.findByIdAndUpdate(
      id,
      { $set: { enAdopcion: estado } },
      { new: true, useFindAndModify: false }
    );
    return res.status(200).json({
      message: " actualizado satisfactoriamente",
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

    if (!urlImg) {
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
      return res.status(200).json({
        message: "Animal actualizado correctamente",
        updatedAnimal,
      });
    } else {
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
          urlImg,
        },
        { new: true }
      );
      return res.status(200).json({
        message: "Animal actualizado correctamente",
        updatedAnimal,
      });
    }
  }
}

export const controllerAnimal = new ControllerAnimal();
