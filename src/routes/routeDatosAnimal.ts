import express from "express";
import { controllerDatosAnimal } from "../controllers/datos-app/controllerDatosAnimal";

const router = express.Router();

const dashboardPath = "dashboard";
const eleccionPath = "seleccion-animal";
const gatoPath = "crear-animal-gato";
const perroPath = "crear-animal-perro";
const creacionPath = "crearDatosAnimal";
const colorOjos = "colorOjos";
const desparasitado = "desparasitado";
const edad = "edad";
const generoAnimal = "generoAnimal";
const situacion = "situacion";
const tamano = "tamano";
const tipoAnimal = "tipoAnimal";
const tipoPelaje = "tipoPelaje";

router.post(
  `/${creacionPath}/${colorOjos}`,
  controllerDatosAnimal.crearColorOjos
);

router.post(
  `/${creacionPath}/${desparasitado}`,
  controllerDatosAnimal.crearDesparasitado
);

router.post(`/${creacionPath}/${edad}`, controllerDatosAnimal.crearEdad);

router.post(
  `/${creacionPath}/${generoAnimal}`,
  controllerDatosAnimal.crearGeneroAnimal
);

router.post(
  `/${creacionPath}/${situacion}`,
  controllerDatosAnimal.crearSituacion
);

router.post(
  `/${creacionPath}/${tamano}`,
  controllerDatosAnimal.crearTamano
);

router.post(
  `/${creacionPath}/${tipoAnimal}`,
  controllerDatosAnimal.crearTipoAnimal
);

router.post(
  `/${creacionPath}/${tipoPelaje}`,
  controllerDatosAnimal.crearTipoPelaje
);

router.get(
  `/${dashboardPath}/${eleccionPath}/${gatoPath}`,
  controllerDatosAnimal.getDatosAnimal
);

router.get(
  `/${dashboardPath}/${eleccionPath}/${perroPath}`,
  controllerDatosAnimal.getDatosAnimal
);


module.exports = router;
