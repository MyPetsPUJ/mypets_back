import { Request, Response, NextFunction } from "express";
import PuntoDeInteres from "../models/modelPuntoInteres";
import Fundacion from "../models/usuarios/modelFundacion";

import jwt from "jsonwebtoken";
import config from "../lib/helpers";

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
      console.log(punto);
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
    try {
      const puntos = await PuntoDeInteres.find();
      const fundaciones = await Fundacion.find();

      return res
        .status(200)
        .json({ message: "Resultado de búsqueda: ", puntos, fundaciones });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error" });
    }
  }

  public async getPunto(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const punto = await PuntoDeInteres.findById(id);

    return res.json({ message: "Punto encontrado: ", punto });
  }

  public async editarPunto(req: Request, res: Response, next: NextFunction) {}

  public async deletePunto(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const punto = await PuntoDeInteres.findByIdAndRemove(id);

    return res.json({
      message: "Punto de interés eliminado correctamente",
      punto,
    });
  }
}

export const controllerPuntoDeInteres = new ControllerPuntoDeInteres();
