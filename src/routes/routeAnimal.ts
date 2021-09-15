import express, { Request, Response, NextFunction } from "express";
import { controllerAnimal } from "../controllers/controllerAnimal";

import multer from "../lib/multer";

const router = express.Router();

const dashboardPath = "dashboard";
const eleccionAnimalPath = "seleccion-animal";
const gatoPath = "crear-animal-gato";
const perroPath = "crear-animal-perro";

router.get(
  `/${dashboardPath}/${eleccionAnimalPath}/${gatoPath}`,
  controllerAnimal.dentroDeAnimal
);
router.get(
  `/${dashboardPath}/${eleccionAnimalPath}/${perroPath}`,
  controllerAnimal.dentroDeAnimal
);

router.post(
  `/${dashboardPath}/${eleccionAnimalPath}/${gatoPath}`,
  multer.single("image"),
  controllerAnimal.crearAnimalGato
);

router.post(
  `/${dashboardPath}/${eleccionAnimalPath}/${perroPath}`,
  multer.single("image"),
  controllerAnimal.crearAnimalPerro
);

module.exports = router;
