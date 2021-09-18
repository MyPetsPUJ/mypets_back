import express from "express";
import { controllerVacunaGato } from "../controllers/controllerVacunaGato";

const router = express.Router();

const dashboardPath = "dashboard";
const eleccionAnimalPath = "seleccion-animal";
const gatoPath = "crear-animal-gato";

router.post("/", controllerVacunaGato.crearVacunas);

router.get(
  `/${dashboardPath}/${eleccionAnimalPath}/${gatoPath}`,
  controllerVacunaGato.getVacunasGato
);

module.exports = router;
