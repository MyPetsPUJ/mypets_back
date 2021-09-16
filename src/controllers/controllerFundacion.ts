import { Request, Response, NextFunction } from "express";
import Fundacion from "../models/modelFundacion";
import path from "path";
import fs from "fs-extra";

class ControllerFundacion {
  public dentroFundacion(req: Request, res: Response, next: NextFunction) {
    res.send([4, 5, 6]);
    console.log("Dentro de fundacion");
    next();
  }

  public async crearFundacion(req: Request, res: Response, next: NextFunction) {
    console.log("Creando fundacion");
    console.log(req.body);
    console.log(req.file);
    const fundacion = new Fundacion({
      nombreFund: req.body.nombreFund,
      nombreEncar: req.body.nombreEncar,
      apellidosEncar: req.body.apellidosEncar,
      tipo_doc: req.body.tipo_doc,
      num_doc: req.body.num_doc,
      fecha_creacion: req.body.fecha_creacion,
      localidad: req.body.localidad,
      correo: req.body.correo,
      num_celular: req.body.num_celular,
      password: req.body.password,
      urlImg: req.file?.path,
      tipo_usuario: "Fundacion",
    });
    fundacion.password = await fundacion.encryptPassword(fundacion.password);
    console.log(fundacion);
    fundacion
      .save()
      .then((result: any) => {
        res.status(201).json({
          message: "Fundación creada",
          result: result,
        });
      })
      .catch((err: any) => {
        res.status(500).json({
          error: err,
        });
      });
  }

  public async getFundaciones(req: Request, res: Response): Promise<Response> {
    const fundaciones = await Fundacion.find();
    return res.json(fundaciones);
  }

  public async getFundacion(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const fundacion = await Fundacion.findById(id);
    return res.json(fundacion);
  }

  public async deleteFundacion(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const fundacion = await Fundacion.findByIdAndRemove(id);

    if (fundacion) {
      fs.unlink(path.resolve(fundacion.urlImg));
    }
    return res.json({
      message: "Fundación eliminada satisfactoriamente",
      fundacion,
    });
  }
}

export const controllerFundacion = new ControllerFundacion();
