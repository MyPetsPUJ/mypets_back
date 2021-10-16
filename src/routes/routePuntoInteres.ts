import express from "express";
import { controllerPuntoDeInteres } from "../controllers/controllerPuntoInteres";

const router = express.Router();

const dashboardPath = "dashboard";
const mapaPath = "mapa";

router.post(
  `/${dashboardPath}/${mapaPath}/:id`,
  controllerPuntoDeInteres.crearPuntoDeInteres
);
router.get(`/${dashboardPath}/${mapaPath}/:id`, controllerPuntoDeInteres.getPuntos);

module.exports = router;
