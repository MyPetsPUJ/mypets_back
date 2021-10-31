import express, { Request, Response, NextFunction } from "express";
import { controllerAdoptante } from "../controllers/usuarios/controllerAdoptante";

const router = express.Router();

const dashboardPath = "dashboard-adoptante";
const adoptantePath = "traer-adoptante";
const perfilPath = "mi-cuenta";
const entidadPath = "crear-cuenta";
const usuarioPath = "crear-adoptante";

router.post(
  `/${entidadPath}/${usuarioPath}`,
  controllerAdoptante.crearAdoptante
);

router.get(
  `/${dashboardPath}/${adoptantePath}/:id`,
  controllerAdoptante.getAdoptante
);

router.get(
  `/${dashboardPath}`, controllerAdoptante.getAdoptantes
);

router.put(
  `/${dashboardPath}/${perfilPath}/:id`,
  controllerAdoptante.updateAdoptante
);

router.delete(
  `/${dashboardPath}/${perfilPath}/:id`,
  controllerAdoptante.deleteAdoptante
);

module.exports = router;
