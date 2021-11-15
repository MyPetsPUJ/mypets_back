import { Request, Response, NextFunction } from "express";

import Publicacion from "../models/modelPublicacion";
import Fundacion from "../models/usuarios/modelFundacion";
import config from "../lib/helpers";

import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs-extra";

class ControllerPublicacion {
  public async crearPublicacion(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log("Creando publicación");
    console.log(req.body);
    console.log(req.file);

    const token: string = req.header("auth-token")!;
    // const userId: string = localStorage.getItem("userId")!;
    // console.log("Este es el id--------", userId);

    console.log("Este es el token----------------");
    console.log(token);
    const decoded = jwt.verify(token, config.SECRET_KEY);

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
        res.status(201).json({
          message: "Publicación creada satisfacotriamente",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
    console.log("Este es el id de la publi recien creada", publicacion._id);

    const fundacionUpdate = await Fundacion.findByIdAndUpdate(
      decoded,
      { $push: { publicaciones: publicacion._id } },
      { new: true, useFindAndModify: false }
    );

    console.log("Fundación actualizada correctamente", fundacionUpdate);
  }

  public async getPublicaciones(req: Request, res: Response) {
    const publicaciones = await Publicacion.find();

    if (publicaciones.length == 0) {
      return res
        .status(204)
        .json({ message: "No se encontraron publicaciones", publicaciones });
    }

    return res.status(200).json(publicaciones);
  }

  public async populatePublicaciones(
    req: Request,
    res: Response
  ): Promise<Response> {
    // const token: string = req.header("auth-token")!;
    // const decoded = jwt.verify(token, config.SECRET_KEY);

    // console.log("Este es el token: ", decoded);
    const id = req.params.id;

    const resultado = await Fundacion.findById(id).populate("publicaciones");

    if (!resultado) {
      return res.status(400).json({
        message: "No se ha encontrado ninguna fundacion con el siguiente id: ",
        id,
      });
    }

    const publis = resultado!.publicaciones;

    return res.status(200).json({ resultado, publis });
  }

  public async getPublicacion(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const id = req.params.id;
    const publicacion = await Publicacion.findById(id);

    if (!publicacion) {
      return res
        .status(400)
        .json({
          message: "No existe ninguna publicación con el siguiente id: ",
          id,
        });
    }

    return res.status(200).json(publicacion);
  }

  public async deletePublicacion(
    req: Request,
    res: Response
  ): Promise<Response> {
    const id = req.params.id;
    const publicacion = await Publicacion.findByIdAndRemove(id);

    if (!publicacion) {
      return res.status(400).json({
        message: "No se ha encontrado ninguna publicación con ese id",
      });
    }

    const fundacionID = publicacion?.autorPublicacion;

    const fundacion = await Fundacion.findByIdAndUpdate(
      fundacionID,
      { $pull: { publicaciones: publicacion?._id } },
      { new: true, useFindAndModify: false }
    );

    if (publicacion) {
      try {
        fs.unlink(path.resolve(publicacion.urlImg));
      } catch (e) {
        return res
          .status(401)
          .json({ message: "No se ha encontrado el archivo", e });
      }
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

    const { titulo, cuerpo } = req.body;

    const urlImg = req.file?.path;

    if (!urlImg) {
      const publi = await Publicacion.findByIdAndUpdate(
        id,
        { titulo, cuerpo },
        (err) => {
          console.log("Error", err);
        }
      );

      console.log(publi);

      return res.status(200).json({
        message: "Publicación actualizada correctamente",
        publi,
      });
    } else {
      const publi = await Publicacion.findByIdAndUpdate(
        id,
        { titulo, cuerpo, urlImg },
        (err) => {
          console.log("Error", err);
        }
      );

      console.log(publi);

      return res.status(200).json({
        message: "Publicación actualizada correctamente",
        publi,
      });
    }

    // console.log(updatePublicacion);
  }
}

export const controllerPublicacion = new ControllerPublicacion();
