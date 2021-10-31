import { Request, Response, NextFunction } from "express";
import Fundacion from "../../models/usuarios/modelFundacion";
import path from "path";
import fs from "fs-extra";
import bcrypt from "bcryptjs";
import geocoder from "../../lib/geocoder";

class ControllerFundacion {
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
      direccion: req.body.direccion,
      mision: req.body.mision,
      vision: req.body.vision,
      correo: req.body.correo,
      num_celular: req.body.num_celular,
      password: req.body.password,
      urlImg: req.file?.path,
      tipo_usuario: "Fundacion",
      ubicacion: null,
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

  public async updateFundacion(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    // console.log(id);

    // const updateFundacion = {
    //   nombreFund: req.body.nombreFund,
    //   nombreEncar: req.body.nombreEncar,
    //   apellidosEncar: req.body.apellidosEncar,
    //   tipo_doc: req.body.tipo_doc,
    //   num_doc: req.body.num_doc,
    //   fecha_creacion: req.body.fecha_creacion,
    //   mision: req.body.mision,
    //   vision: req.body.vision,
    //   correo: req.body.correo,
    //   num_celular: req.body.num_celular,
    //   password: req.body.password,
    //   direccion: req.body.direccion,
    //   urlImg: req.file?.path,
    // };

    // console.log(updateFundacion);

    const {
      nombreFund,
      nombreEncar,
      apellidosEncar,
      tipo_doc,
      num_doc,
      fecha_creacion,
      mision,
      vision,
      correo,
      num_celular,
      password,
      direccion,
    } = req.body;

    const urlImg = req.file?.path;

    const salt = await bcrypt.genSalt(10);

    const newPassword = await bcrypt.hash(password, salt);

    const loc = await geocoder.geocode(direccion);

    const ubicacion = {
      type: "Point",
      coordinates: [loc[0].longitude, loc[0].latitude],
      direccionFormateada: loc[0].formattedAddress,
    };

    console.log(newPassword);

    // const nombre = updateFundacion.nombreFund;
    // const nombreEncargado = updateFundacion.nombreEncar;
    // const apellidosEncargado = updateFundacion.apellidosEncar;
    // const tipo_documento = updateFundacion.tipo_doc;
    // const num_documento = updateFundacion.num_doc;
    // const fecha = updateFundacion.fecha_creacion;
    // const msn = updateFundacion.mision;
    // const vsn = updateFundacion.vision;
    // const corr = updateFundacion.correo;
    // const num = updateFundacion.num_celular;
    // const pass = updateFundacion.password;
    // const dir = updateFundacion.direccion;
    // const img = updateFundacion.urlImg;

    // console.log("imagen", img);

    if (!urlImg) {
      const fund = await Fundacion.findByIdAndUpdate(
        id,
        {
          nombreFund,
          nombreEncar,
          apellidosEncar,
          tipo_doc,
          num_doc,
          fecha_creacion,
          mision,
          vision,
          correo,
          num_celular,
          newPassword,
          direccion,
          ubicacion,
        },
        { new: true }
      );

      console.log("Fundación act", fund);
      return res.json({
        message: "Fundación actualizada correctamente",
        fund,
      });
    } else {
      const fund = await Fundacion.findByIdAndUpdate(
        id,
        {
          nombreFund,
          nombreEncar,
          apellidosEncar,
          tipo_doc,
          num_doc,
          fecha_creacion,
          mision,
          vision,
          correo,
          num_celular,
          newPassword,
          direccion,
          ubicacion,
          urlImg,
        },
        { new: true }
      );

      console.log("Fundación act", fund);

      return res.json({
        message: "Fundación actualizada correctamente",
        fund,
      });
    }
  }
}

export const controllerFundacion = new ControllerFundacion();
