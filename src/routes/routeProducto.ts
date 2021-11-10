import express, { Request, Response, NextFunction } from "express";
import { controllerProducto } from "../controllers/tienda/controllerProducto";

import multer from "../lib/multer";
import { tokenValidation } from "../lib/validateToken";

const router = express.Router();

const dashAdoptante = "dashboard-adoptante";
const dashAdmin = "dashboard-admin";
const dashFundacion = "dashboard";
const tienda = "tienda";
const crearItem = "agregar-nuevo-item";
const mostrarItem = "item";
const mostrarMisItems = "traer-todos-mis-items";
const mostrarAllItems = "traer-todos-los-items";
const editarItem = "editar-item";

router.post(
  `/${dashAdmin}/${crearItem}`,
  multer.single("image"),
  controllerProducto.crearProducto
);

router.get(`/${dashAdmin}/${mostrarMisItems}`, controllerProducto.getProductos);

router.get(
  `/${dashAdoptante}/${tienda}/${mostrarAllItems}`,
  controllerProducto.getProductos
);
