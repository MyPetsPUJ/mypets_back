import { Request, Response, NextFunction } from "express";
import PuntoDeInteres from "../models/modelPuntoInteres";

class ControllerPuntoDeInteres {
  public async crearPuntoDeInteres(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const punto = new PuntoDeInteres(req.body);
      console.log(punto);
      punto.save();

      return res.status(200).json({
        success: true,
        data: punto,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  }
}

export const controllerPuntoDeInteres = new ControllerPuntoDeInteres();
