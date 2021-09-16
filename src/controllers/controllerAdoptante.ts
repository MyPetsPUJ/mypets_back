import { Request, Response, NextFunction } from "express";
import Adoptante from "../models/modelAdoptante";

class ControllerAdoptante {
  public dentroAdoptante(req: Request, res: Response, next: NextFunction) {
    res.send([1, 2, 3]);
    console.log("Dentro de adoptante");
    next();
  }

  public async crearAdoptante(req: Request, res: Response, next: NextFunction) {
    console.log("Creando adoptante");
    console.log(req.body);
    const adoptante = new Adoptante({
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      fecha_nacimiento: req.body.fecha_nacimiento,
      tipo_doc: req.body.tipo_doc,
      num_doc: req.body.num_doc,
      genero: req.body.genero,
      localidad: req.body.localidad,
      correo: req.body.correo,
      num_celular: req.body.num_celular,
      password: req.body.password,
      tipo_usuario: "Adoptante",
    });
    adoptante.password = await adoptante.encryptPassword(adoptante.password);
    console.log(adoptante);
    adoptante
      .save()
      .then((result: any) => {
        res.status(201).json({
          message: "Adoptante creado",
          result: result,
        });
      })
      .catch((err: any) => {
        res.status(500).json({
          error: err,
        });
      });
  }

  public async getAdoptantes(req: Request, res: Response): Promise<Response> {
    const adoptantes = await Adoptante.find();
    return res.json(adoptantes);
  }

  public async getAdoptante(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const adoptante = await Adoptante.findById(id);
    return res.json(adoptante);
  }

  public async deleteAdoptante(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const adoptante = await Adoptante.findByIdAndRemove(id);

    // if (adoptante) {
    //   fs.unlink(path.resolve(adoptante.urlImg));
    // }
    return res.json({
      message: "Adoptante eliminado satisfactoriamente",
      adoptante,
    });
  }
}

export const controllerAdoptante = new ControllerAdoptante();
