import express, { Request, Response, NextFunction } from "express";
import { controllerAdoptante } from "../controllers/usuarios/controllerAdoptante";

import multer from "../lib/multer";

const router = express.Router();

const dashboardPath = "dashboard-adoptante";
const adoptantePath = "traer-adoptante";
const perfilPath = "mi_cuenta";
const entidadPath = "crear-cuenta";
const usuarioPath = "crear-adoptante";

router.post(
  `/${entidadPath}/${usuarioPath}`,
  multer.single("image"),
  controllerAdoptante.crearAdoptante
);

router.get(
  `/${dashboardPath}/${adoptantePath}/:id`,
  controllerAdoptante.getAdoptante
);

router.get(
  `/${dashboardPath}`, controllerAdoptante.getAdoptantes
);

router.get(
  `/${dashboardPath}/${perfilPath}/:id`,
  controllerAdoptante.getAdoptante
);

router.put(
  `/${dashboardPath}/${perfilPath}/:id`,
  multer.single("image"),
  controllerAdoptante.updateAdoptante
);

router.delete(
  `/${dashboardPath}/${perfilPath}/:id`,
  controllerAdoptante.deleteAdoptante
);

module.exports = router;
