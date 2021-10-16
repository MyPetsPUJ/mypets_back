import { Request, Response, NextFunction } from "express";
import PuntoDeInteres from "../models/modelPuntoInteres";

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
      const decoded = jwt.verify(token, config.SECRET_KEY);

      console.log(req.body);
      const punto = await PuntoDeInteres.create(req.body);
      console.log(punto);
      punto.save();

      const updatePunto = await PuntoDeInteres.findByIdAndUpdate(
        punto._id,
        {
          $push: { autorPuntoDeInteres: decoded },
        },
        { new: true, useFindAndModify: false }
      );

      return res.status(200).json({
        success: true,
        data: updatePunto,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  }

  public async getPuntos(req: Request, res: Response, next: NextFunction) {
    try {
      const puntos = await PuntoDeInteres.find();

      return res.status(200).json({
        success: true,
        count: puntos.length,
        data: puntos,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error" });
    }
  }
}

export const controllerPuntoDeInteres = new ControllerPuntoDeInteres();
