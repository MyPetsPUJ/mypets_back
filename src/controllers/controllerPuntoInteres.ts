import { Request, Response, NextFunction } from "express";
import PuntoDeInteres from "../models/modelPuntoInteres";
import Fundacion from "../models/usuarios/modelFundacion";

import jwt from "jsonwebtoken";
import config from "../lib/helpers";
import geocoder from "../lib/geocoder";

class ControllerPuntoDeInteres {
  public async crearPuntoDeInteres(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const token: string = req.header("auth-token")!;

      console.log("Este es el token----------------");
      console.log(token);

      const decoded: any = jwt.verify(token, config.SECRET_KEY);

      console.log(req.body);
      const punto = await PuntoDeInteres.create(req.body);
      console.log("El punto:", punto);
      if (!punto) {
        return res
          .status(400)
          .json({ message: "Error, el punto de interés no fue creado" });
      }

      punto.save();

      const updatePunto = await PuntoDeInteres.findByIdAndUpdate(
        punto._id,
        {
          $set: { autorPuntoDeInteres: decoded },
        },
        { new: true, useFindAndModify: false }
      );

      const fundacion = await Fundacion.findByIdAndUpdate(
        decoded,
        { $push: { puntosDeInteres: punto._id } },
        { new: true, useFindAndModify: false }
      );

      console.log(fundacion);

      return res.status(200).json({
        success: true,
        data: updatePunto,
        coord: updatePunto?.ubicacion.coordinates,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  public async getPuntos(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      const fundacion = await Fundacion.findById(id).populate(
        "puntosDeInteres"
      );

      const puntos = fundacion!.puntosDeInteres;
      // console.log(puntos);

      return res.status(200).json({
        fundacion,
        puntos,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error" });
    }
  }

  public async mostrarPuntos(req: Request, res: Response, next: NextFunction) {
    const puntos = await PuntoDeInteres.find();
    const fundaciones = await Fundacion.find();

    if (puntos.length == 0 && fundaciones.length == 0) {
      return res.status(204).json({
        message: "Petición procesada, no se han encontrado resultados",
        puntos,
        fundaciones,
      });
    }

    return res
      .status(200)
      .json({ message: "Resultado de búsqueda: ", puntos, fundaciones });
  }

  public async getPunto(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const punto = await PuntoDeInteres.findById(id);

    if (!punto) {
      return res
        .status(400)
        .json({ message: "No se ha encontrado el punto de interés" });
    }
    return res.status(200).json(punto);
  }

  public async editarPunto(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const { direccion, titulo, descripcion } = req.body;

    const loc = await geocoder.geocode(direccion);

    const ubicacion = {
      type: "Point",
      coordinates: [loc[0].longitude, loc[0].latitude],
      direccionFormateada: loc[0].formattedAddress,
    };

    const puntoUpdated = await PuntoDeInteres.findByIdAndUpdate(
      id,
      {
        titulo,
        direccion,
        descripcion,
        ubicacion,
      },
      { new: true }
    );
    if (!puntoUpdated) {
      return res.status(400).json({
        message: "Error, no se ha encontrado el punto con el siguiente id: ",
        id,
      });
    }
    console.log("Punto act", puntoUpdated);
    return res.status(200).json({
      message: "Punto actualizado",
      puntoUpdated,
    });
  }

  public async deleteAllPuntosFundacion(req: Request, res: Response) {
    const id = req.params.id;

    const resultado = await Fundacion.findById(id).populate("puntosDeInteres");

    if (!resultado) {
      return res.status(400).json({ message: "Fundación inexistente" });
    }

    const puntos = resultado!.puntosDeInteres;

    await PuntoDeInteres.remove(puntos);
    return res
      .status(200)
      .json({ message: "Puntos eliminados correctamente", puntos });
  }

  public async deletePunto(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const punto = await PuntoDeInteres.findByIdAndRemove(id);

    if (!punto) {
      return res.status(400).json({
        message: "No se ha encontrado ningún punto de interés con ese id",
      });
    }

    const fundacionID = punto?.autorPuntoDeInteres;

    const fundacion = await Fundacion.findByIdAndUpdate(
      fundacionID,
      { $pull: { puntosDeInteres: punto?._id } },
      { new: true, useFindAndModify: false }
    );

    return res.status(200).json({
      message: "Punto de interés eliminado correctamente",
      punto,
    });
  }
}

export const controllerPuntoDeInteres = new ControllerPuntoDeInteres();
