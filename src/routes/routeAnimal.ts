import express, { Request, Response, NextFunction } from "express";
import { controllerAnimal } from "../controllers/controllerAnimal";
import { tokenValidation } from "../lib/validateToken";

import multer from "../lib/multer";

const router = express.Router();

const dashboardPath = "dashboard";
const adoptantePath = "dashboard-adoptante";
const adoptamePath = "adoptame";
const eleccionAnimalPath = "seleccion-animal";
const getAnimalesPath = "mis-animales";
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
  [multer.single("image"), tokenValidation],
  controllerAnimal.crearAnimalGato
);

router.post(
  `/${dashboardPath}/${eleccionAnimalPath}/${perroPath}`,
  [multer.single("image"), tokenValidation],
  controllerAnimal.crearAnimalPerro
);

router.get(`/${dashboardPath}/animales`, controllerAnimal.populateAnimales);

router.get(
  `/${dashboardPath}/${getAnimalesPath}`,
  controllerAnimal.getAnimales
);

router.get(`/${adoptantePath}/${adoptamePath}`, controllerAnimal.getAnimales);

router.get(
  `/${dashboardPath}/${getAnimalesPath}/:id`,
  controllerAnimal.getAnimal
);

router.put(
  `/${dashboardPath}/${getAnimalesPath}/:id`, //añadir ruta editar animales
  controllerAnimal.updateAnimal
);

router.delete(
  `/${dashboardPath}/${getAnimalesPath}/:id`,
  controllerAnimal.deleteAnimal
);

module.exports = router;
