import express from "express";
import { controllerPuntoDeInteres } from "../controllers/controllerPuntoInteres";

const router = express.Router();

const dashboardPath = "dashboard";
const mapaPath = "mapa";
const adoptantePath = "dashboard-adoptante";
const editarPath = "editar-punto";

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

router.get(
  `/${dashboardPath}/${mapaPath}/${editarPath}/:id`,
  controllerPuntoDeInteres.getPunto
);

module.exports = router;
