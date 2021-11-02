import { Request, Response, NextFunction } from "express";
import Adoptante from "../../models/usuarios/modelAdoptante";
import bcrypt from "bcryptjs";
import fs from "fs-extra";
import path from "path";

class ControllerAdoptante {
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
      urlImg: req.file?.path,
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

    if (adoptante) {
      fs.unlink(path.resolve(adoptante.urlImg));
    }
    return res.json({
      message: "Adoptante eliminado satisfactoriamente",
      adoptante,
    });
  }

  public async updateAdoptante(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const {
      nombre,
      apellidos,
      tipo_doc,
      num_doc,
      fecha_nacimiento,
      genero,
      localidad,
      correo,
      num_celular,
      password,
    } = req.body;

    const urlImg = req.file?.path;

    const salt = await bcrypt.genSalt(10);

    const newPassword = await bcrypt.hash(password, salt);

    if (!urlImg) {
      const updatedAdoptante = await Adoptante.findByIdAndUpdate(
        id,
        {
          nombre,
          apellidos,
          fecha_nacimiento,
          tipo_doc,
          num_doc,
          genero,
          localidad,
          correo,
          num_celular,
          newPassword,
        },
        { new: true }
      );
      return res.json({
        message: "Adoptante actualizado correctamente",
        updatedAdoptante,
      });
    } else {
      const updatedAdoptante = await Adoptante.findByIdAndUpdate(
        id,
        {
          nombre,
          apellidos,
          fecha_nacimiento,
          tipo_doc,
          num_doc,
          genero,
          localidad,
          correo,
          num_celular,
          newPassword,
          urlImg,
        },
        { new: true }
      );
      return res.json({
        message: "Adoptante actualizado correctamente",
        updatedAdoptante,
      });
    }
  }
}

export const controllerAdoptante = new ControllerAdoptante();
