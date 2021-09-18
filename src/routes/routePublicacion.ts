import express, { Request, Response, NextFunction } from "express";
import { controllerPublicacion } from "../controllers/controllerPublicacion";

import multer from "../lib/multer";

const router = express.Router();

const dashboardPath = "dashboard";
const publicacionesPath = "publicaciones";
const creacionPath = "crear-publicacion";
const editarPath = "editar-publicacion";
const eliminarPath = "eliminar-publicacion";

router.post(
  `/${dashboardPath}/${publicacionesPath}/${creacionPath}`,
  multer.single("image"),
  controllerPublicacion.crearPublicacion
);

router.get(
  `/${dashboardPath}/${publicacionesPath}/:id`,
  controllerPublicacion.getPublicacion
);

router.get(
  `/${dashboardPath}/${publicacionesPath}`,
  controllerPublicacion.getPublicaciones
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
