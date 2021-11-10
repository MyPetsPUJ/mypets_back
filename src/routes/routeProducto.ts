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
const eliminarItem = "eliminar-item";

router.post(
  `/${dashAdmin}/${crearItem}`,
  multer.single("image"),
  controllerProducto.crearProducto
);

router.get(`/${dashAdmin}/${mostrarMisItems}`, controllerProducto.getProductos);

router.put(
  `/${dashAdmin}/${mostrarItem}/${editarItem}/:id`,
  controllerProducto.updateProducto
);

router.delete(
    `/${dashAdmin}/${mostrarItem}/${eliminarItem}/:id`,
    controllerProducto.deleteProducto
  );



router.get(
  `/${dashAdoptante}/${tienda}/${mostrarAllItems}`,
  controllerProducto.getProductos
);

router.get(
  `/${dashAdoptante}/${tienda}/${mostrarItem}(:id)`,
  controllerProducto.getProducto
);

router.get(
    `/${dashFundacion}/${tienda}/${mostrarAllItems}`,
    controllerProducto.getProductos
  );
  
  router.get(
    `/${dashFundacion}/${tienda}/${mostrarItem}(:id)`,
    controllerProducto.getProducto
  );
