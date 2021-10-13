import express from "express";
import { controllerVacunaPerro } from "../controllers/datos-app/controllerVacunaPerro";

const router = express.Router();

const dashboardPath = "dashboard";
const eleccionAnimalPath = "seleccion-animal";
const perroPath = "crear-animal-perro";

router.post("/perro", controllerVacunaPerro.crearVacunas);

router.get(
  `/${dashboardPath}/${eleccionAnimalPath}/${perroPath}`,
  controllerVacunaPerro.getVacunasPerro
);

module.exports = router;
