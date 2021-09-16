import express, { Request, Response, NextFunction } from "express";
import { controllerAdoptante } from "../controllers/controllerAdoptante";

const router = express.Router();
const dashboardPath = "dashboard-adoptante";
const cuentaPath = "mi-cuenta";
const entidadPath = "crear-cuenta";
const usuarioPath = "crear-adoptante";

router.get(
  `/${entidadPath}/${usuarioPath}`,
  controllerAdoptante.dentroAdoptante
);

router.post(
  `/${entidadPath}/${usuarioPath}`,
  controllerAdoptante.crearAdoptante
);

router.get(`/${dashboardPath}/:id`, controllerAdoptante.getAdoptantes);

router.get(`/${dashboardPath}`, controllerAdoptante.getAdoptantes);

router.get(
  `/${dashboardPath}/${cuentaPath}/:id`,
  controllerAdoptante.deleteAdoptante
);

module.exports = router;
//export default router;
