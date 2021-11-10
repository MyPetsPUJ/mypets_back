import { Request, Response, NextFunction, json } from "express";

import Adoptante from "../models/usuarios/modelAdoptante";
import Fundacion from "../models/usuarios/modelFundacion";
import Admin from "../models/usuarios/modelAdmin";
import config, { UserType } from "../lib/helpers";
import cookieParser from "cookie-parser";

const jwt = require("jsonwebtoken");

class ControllerLogin {
  public dentroLogin(req: Request, res: Response, next: NextFunction) {
    res.send([9, 9, 9]);
    console.log("Dentro de login");
    next();
  }

  public profile(req: Request, res: Response) {
    res.send([1, 2, 3, 4]);
  }

  public async hacerLogin(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);

    const tipo_usuario: String = req.body.tipo_usuario;

    console.log("Este es el tipo de usuario:");
    console.log(tipo_usuario);

    if (tipo_usuario === UserType.ADOPTANTE) {
      console.log("Entrando a adoptante");
      const adoptante = await Adoptante.findOne({ correo: req.body.correo });
      if (!adoptante) {
        return res.status(401).json({
          message: "Correo inválido",
        });
      }
      const correctPassword: boolean = await adoptante.validatePassword(
        req.body.password
      );
      if (!correctPassword) {
        return res.status(401).json({
          message: "Contraseña inválida",
        });
      }
      if (adoptante.tipo_usuario != req.body.tipo_usuario) {
        return res.status(401).json({
          message: "El tipo de usuario no coincide",
        });
      }
      const token: string = jwt.sign(
        { _id: adoptante._id },
        config.SECRET_KEY,
        { expiresIn: 60 * 60 }
      );

      return res.header("auth-token", token).json({
        message: "Usuario logueado satisfactoriamente",
        adoptante,
        tipo_usuario,
        token,
        expiresIn: 3600,
        userId: adoptante._id,
      });
    } else if (tipo_usuario === UserType.FUNDACION) {
      console.log("Entrando a fundación");
      const fundacion = await Fundacion.findOne({ correo: req.body.correo });
      if (!fundacion) {
        return res.status(401).json({
          message: "Correo inválido",
        });
      }
      const correctPassword: boolean = await fundacion.validatePassword(
        req.body.password
      );
      if (!correctPassword) {
        return res.status(401).json({
          message: "Contraseña inválida",
        });
      }
      if (fundacion.tipo_usuario != req.body.tipo_usuario) {
        return res.status(401).json({
          message: "El tipo de usuario no coincide",
        });
      }
      const token = jwt.sign({ _id: fundacion._id }, config.SECRET_KEY, {
        expiresIn: 60 * 60,
      });

      return res.header("auth-token", token).json({
        message: "Usuario logueado satisfactoriamente",
        fundacion,
        tipo_usuario,
        token,
        expiresIn: 3600,
        userId: fundacion._id,
      });
    } else if (tipo_usuario === UserType.ADMIN) {
      console.log("Entrando a admin");
      const admin = await Admin.findOne({ correo: req.body.correo });
      if (!admin) {
        return res.status(401).json({
          message: "Correo inválido",
        });
      }
      const correctPassword: boolean = await admin.validatePassword(
        req.body.password
      );
      if (!correctPassword) {
        return res.status(401).json({
          message: "Contraseña inválida",
        });
      }
      if (admin.tipo_usuario != req.body.tipo_usuario) {
        return res.status(401).json({
          message: "El tipo de usuario no coincide",
        });
      }
      const token = jwt.sign({ _id: admin._id }, config.SECRET_KEY, {
        expiresIn: 60 * 60,
      });

      return res.header("auth-token", token).json({
        message: "Usuario logueado satisfactoriamente",
        admin,
        tipo_usuario,
        token,
        expiresIn: 3600,
        userId: admin._id,
      });
    }
  }
}

export const controllerLogin = new ControllerLogin();
