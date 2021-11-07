import { Response, Request, NextFunction } from "express";

import Producto from "../../models/tienda/modelProducto";

import path from "path";
import fs from "fs-extra";

class ControllerProducto {
  public crearProducto(req: Request, res: Response, next: NextFunction) {
    const producto = new Producto({
      nombre: req.body.nombre,
      tipoAnimal: req.body.tipoAnimal,
      urlImg: req.file?.path,
      descripcion: req.body.descripcion,
      secion: req.body.seccion,
      precio: req.body.precio,
    });

    producto
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

  public async getProductos(req: Request, res: Response, next: NextFunction) {
    const productos = await Producto.find();
    return res.json(productos);
  }

  public async getProducto(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const producto = await Producto.findById(id);
    return res.json(producto);
  }

  public async updateProducto(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const { nombre, tipoAnimal, descripcion, seccion, precio } = req.body;

    const urlImg = req.file?.path;

    if (!urlImg) {
      const prod = await Producto.findByIdAndUpdate(
        id,
        {
          nombre,
          tipoAnimal,
          descripcion,
          seccion,
          precio,
        },
        { new: true }
      );
      console.log("Producto act", prod);
      return res.json({
        message: "Producto actualizado correctamente",
        prod,
      });
    } else {
      const prod = await Producto.findByIdAndUpdate(
        id,
        {
          nombre,
          tipoAnimal,
          descripcion,
          seccion,
          precio,
          urlImg,
        },
        { new: true }
      );
      console.log("Producto act", prod);
      return res.json({
        message: "Producto actualizado correctamente",
        prod,
      });
    }
  }

  public async deleteProducto(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const producto = await Producto.findByIdAndRemove(id);

    if (producto) {
      fs.unlink(path.resolve(producto.urlImg));
    }
    return res.json({
      message: "Producto eliminado satisfactoriamente",
      producto,
    });
  }
}

export const controllerProducto = new ControllerProducto();
