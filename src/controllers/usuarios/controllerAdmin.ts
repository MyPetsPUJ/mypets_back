import { Response, Request, NextFunction } from "express";

import Admin from "../../models/usuarios/modelAdmin";

class ControllerAdmin {
  public async crearAdmin(req: Request, res: Response, next: NextFunction) {
    const admin = new Admin({
      nombres: req.body.nombre,
      apellidos: req.body.apellidos,
      correo: req.body.correo,
      password: req.body.password,
      tipo_usuario: "Administrador",
    });
    admin.password = await admin.encryptPassword(admin.password);
    admin
      .save()
      .then((result: any) => {
        res.status(201).json({
          message: "Admin creado",
          result: result,
        });
      })
      .catch((err: any) => {
        res.status(500).json({
          error: err,
        });
      });
  }
}

export const controllerAdmin = new ControllerAdmin();
