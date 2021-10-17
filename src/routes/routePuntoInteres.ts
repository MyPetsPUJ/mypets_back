import express from "express";
import { controllerPuntoDeInteres } from "../controllers/controllerPuntoInteres";

const router = express.Router();

const dashboardPath = "dashboard";
const mapaPath = "mapa";
const adoptantePath = "dashboard-adoptante";

router.post(
  `/${dashboardPath}/${mapaPath}/:id`,
  controllerPuntoDeInteres.crearPuntoDeInteres
);
router.get(
  `/${dashboardPath}/${mapaPath}/:id`,
  controllerPuntoDeInteres.getPuntos
);

router.get(
  `/${adoptantePath}/${mapaPath}`,
  controllerPuntoDeInteres.mostrarPuntos
);

module.exports = router;
