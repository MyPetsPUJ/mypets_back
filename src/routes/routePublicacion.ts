import express, { Request, Response, NextFunction } from "express";
import { controllerPublicacion } from "../controllers/controllerPublicacion";

import multer from "../lib/multer";
import { tokenValidation } from "../lib/validateToken";

const router = express.Router();

const dashboardPath = "dashboard";
const publicacionesPath = "publicaciones";
const mostrarPath = "mostrar-publicaciones";
const creacionPath = "crear-publicacion";
const editarPath = "editar-publicacion";
const eliminarPath = "eliminar-publicacion";

router.post(
  `/${dashboardPath}/${publicacionesPath}/${creacionPath}`,
  [multer.single("image"), tokenValidation],
  controllerPublicacion.crearPublicacion
);

router.get(
  `/${dashboardPath}/${publicacionesPath}/${mostrarPath}`,
  controllerPublicacion.getPublicaciones
);

router.get(
  `/${dashboardPath}/${publicacionesPath}/:id`,
  controllerPublicacion.getPublicacion
);

router.put(
  `/${dashboardPath}/${publicacionesPath}/${editarPath}/:id`,
  controllerPublicacion.updatePublicacion
);

router.delete(
  `/${dashboardPath}/${publicacionesPath}/${eliminarPath}/:id`,
  controllerPublicacion.deletePublicacion
);

module.exports = router;
