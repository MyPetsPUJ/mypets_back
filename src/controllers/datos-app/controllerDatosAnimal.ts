import { Response, Request, NextFunction } from "express";
import modelColorOjosAnimal from "../../models/datos-app/animal/modelColorOjosAnimal";
import modelDesparasitadoAnimal from "../../models/datos-app/animal/modelDesparasitadoAnimal";
import modelEdadAnimal from "../../models/datos-app/animal/modelEdadAnimal";
import modelGeneroAnimal from "../../models/datos-app/animal/modelGeneroAnimal";
import modelSituacionAnimal from "../../models/datos-app/animal/modelSituacionAnimal";
import modelTamanoAnimal from "../../models/datos-app/animal/modelTamanoAnimal";
import modelTipoAnimal from "../../models/datos-app/animal/modelTipoAnimal";
import modelTipoPelajeAnimal from "../../models/datos-app/animal/modelTipoPelajeAnimal";

import DatosAnimal from "../../models/datos-app/modelDatosAnimal";

class ControllerDatosAnimal {
  public crearEdad(req: Request, res: Response) {
    const edad = new modelEdadAnimal({
      edad: req.body.edad,
    });
    edad.save().then((respuesta) => {
      return res
        .status(201)
        .json({ message: "Edad creada de manera correcta", respuesta });
    });
  }

  public crearColorOjos(req: Request, res: Response) {
    const colorOjos = new modelColorOjosAnimal({
      color: req.body.color,
    });
    colorOjos.save().then((respuesta) => {
      return res.status(201).json({
        message: "Color de ojos creado de manera correcta",
        respuesta,
      });
    });
  }

  public crearDesparasitado(req: Request, res: Response) {
    const desparasitado = new modelDesparasitadoAnimal({
      estado: req.body.estado,
    });
    desparasitado.save().then((respuesta) => {
      return res.status(201).json({
        message: "Estado desparasitado creado de manera correcta",
        respuesta,
      });
    });
  }

  public crearGeneroAnimal(req: Request, res: Response) {
    const generoAnimal = new modelGeneroAnimal({
      genero: req.body.genero,
    });
    generoAnimal.save().then((respuesta) => {
      return res.status(201).json({
        message: "Genero creado de manera correcta",
        respuesta,
      });
    });
  }

  public crearSituacion(req: Request, res: Response) {
    const esterilizado = new modelSituacionAnimal({
      situacion: req.body.situacion,
    });
    esterilizado.save().then((respuesta) => {
      return res.status(201).json({
        message: "Situación de esterilización creada de manera correcta",
        respuesta,
      });
    });
  }

  public crearTamano(req: Request, res: Response) {
    const tamano = new modelTamanoAnimal({
      tamano: req.body.tamano,
    });
    tamano.save().then((respuesta) => {
      return res.status(201).json({
        message: "Tamaño creado de manera correcta",
        respuesta,
      });
    });
  }

  public crearTipoAnimal(req: Request, res: Response) {
    const tipo = new modelTipoAnimal({
      tipo: req.body.tipo,
    });
    tipo.save().then((respuesta) => {
      return res.status(201).json({
        message: "Tipo animal creado de manera correcta",
        respuesta,
      });
    });
  }

  public crearTipoPelaje(req: Request, res: Response) {
    const tipoPelaje = new modelTipoPelajeAnimal({
      tipoPelaje: req.body.tipoPelaje,
    });
    tipoPelaje.save().then((respuesta) => {
      return res.status(201).json({
        message: "Tipo pelaje creado de manera correcta",
        respuesta,
      });
    });
  }

  public async getDatosAnimal(req: Request, res: Response): Promise<Response> {
    const colorOjos = await modelColorOjosAnimal.find();
    const desparasitados = await modelDesparasitadoAnimal.find();
    const edades = await modelEdadAnimal.find();
    const generosAnimal = await modelGeneroAnimal.find();
    const situaciones = await modelSituacionAnimal.find();
    const tamanos = await modelTamanoAnimal.find();
    const tiposAnimal = await modelTipoAnimal.find();
    const tiposPelaje = await modelTipoPelajeAnimal.find();

    return res.status(200).json({
      message: "Datos animal ",
      colorOjos,
      desparasitados,
      edades,
      generosAnimal,
      situaciones,
      tamanos,
      tiposAnimal,
      tiposPelaje,
    });
  }
}

export const controllerDatosAnimal = new ControllerDatosAnimal();
