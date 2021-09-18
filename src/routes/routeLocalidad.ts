import express from "express";
import { controllerLocalidad } from "../controllers/controllerLocalidad";

const router = express.Router();

const entidadPath = "crear-cuenta";
const usuarioPath = "crear-adoptante";
const fundacionPath = "crear-fundacion";

router.post("/localidades", controllerLocalidad.crearLocalidades);

router.get(
  `/${entidadPath}/${usuarioPath}`,
  controllerLocalidad.getLocalidades
);

router.get(
  `/${entidadPath}/${fundacionPath}`,
  controllerLocalidad.getLocalidades
);
module.exports = router;
