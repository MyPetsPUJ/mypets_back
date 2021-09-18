import express from "express";
import { controllerVacuna } from "../controllers/controllerVacuna";

const router = express.Router();

const dashboardPath = "dashboard";
const eleccionAnimalPath = "seleccion-animal";
const gatoPath = "crear-animal-gato";
const perroPath = "crear-animal-perro";

router.post("/", controllerVacuna.crearVacunas);

router.get(
  `/${dashboardPath}/${eleccionAnimalPath}/${gatoPath}`,
  controllerVacuna.getVacunas
);

router.get(
    `/${dashboardPath}/${eleccionAnimalPath}/${perroPath}`,
    controllerVacuna.getVacunas
  );

module.exports = router;
