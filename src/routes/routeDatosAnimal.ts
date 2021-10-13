import express from "express";
import { controllerDatosAnimal } from "../controllers/datos-app/controllerDatosAnimal";

const router = express.Router();

const dashboardPath = "dashboard";
const eleccionPath = "seleccion-animal";
const gatoPath = "crear-animal-gato";
const perroPath = "crear-animal-perro";
const creacionPath = "crearDatosAnimal";

router.post(`/${creacionPath}`, controllerDatosAnimal.crearDatosAnimal);

router.get(
  `/${dashboardPath}/${eleccionPath}/${gatoPath}`,
  controllerDatosAnimal.getDatosAnimal
);

router.get(
  `/${dashboardPath}/${eleccionPath}/${perroPath}`,
  controllerDatosAnimal.getDatosAnimal
);

router.delete(`/eliminarDato/:id`, controllerDatosAnimal.deleteDatosAnimal);

module.exports = router;
