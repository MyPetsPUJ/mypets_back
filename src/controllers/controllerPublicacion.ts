import { Request, Response, NextFunction } from "express";
import Publicacion from "../models/modelPublicacion";
import Fundacion from "../models/modelFundacion";
import config from "../lib/helpers";

import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs-extra";

class ControllerPublicacion {
  public crearPublicacion(req: Request, res: Response, next: NextFunction) {
    console.log("Creando publicación");
    console.log(req.body);
    console.log(req.file);

    const token: string = req.header("auth-token")!;
    console.log("Este es el token----------------");
    console.log(token);
    const decoded = jwt.verify(token, config.SECRET_KEY);
    console.log(decoded);

    const publicacion = new Publicacion({
      titulo: req.body.titulo,
      cuerpo: req.body.cuerpo,
      fecha: req.body.fecha,
      urlImg: req.file?.path,
      seccion: req.body.seccion,
      autorPublicacion: decoded,
    });
    console.log(publicacion);
    publicacion
      .save()
      .then((result) => {
        res.status(200).json({
          message: "Publicación creada satisfacotriamente",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  }

  public getPublicaciones(req: Request, res: Response) {
    console.log("Hola mundo");
    // console.log("Entrando a publicaciones");
    // const publicaciones = await Publicacion.find();
    // console.log("Entré a publi encontrada");
    // console.log(publicaciones);
    // Fundacion.populate(publicaciones, { path: "Fundacion" });
    // return res.json(publicaciones);

    // // Publicacion.find({}, (err, publicaciones) => {
    // //   if(err) return res.status(500).send({message: `Error: ${err}`})
    // //   if(!publicaciones) return res.status(404).send({message: `No existen publicaciones`})

    // //   return res.status(200).send(publicaciones);
    // // });
  }

  public async getPublicacion(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const id = req.params.id;
    const publicacion = await Publicacion.findById(id);
    return res.json(publicacion);
  }

  public async deletePublicacion(
    req: Request,
    res: Response
  ): Promise<Response> {
    const id = req.params.id;
    const publicacion = await Publicacion.findByIdAndRemove(id);

    if (publicacion) {
      fs.unlink(path.resolve(publicacion.urlImg));
    }
    return res.json({
      message: "Publicación eliminada satisfactoriamente",
      publicacion,
    });
  }

  public async updatePublicacion(
    req: Request,
    res: Response
  ): Promise<Response> {
    const id = req.params.id;
    const { titulo, cuerpo, seccion } = req.body;

    const updatedPublicacion = await Publicacion.findByIdAndUpdate(
      id,
      {
        titulo,
        cuerpo,
        seccion,
      },
      { new: true }
    );
    return res.json({
      message: "Publicación actualizada correctamente",
      updatedPublicacion,
    });
  }
}

export const controllerPublicacion = new ControllerPublicacion();
