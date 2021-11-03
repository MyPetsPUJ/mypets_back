import express from "express";
import { controllerDatosSignUp } from "../controllers/datos-app/controllerDatosSignUp";

const router = express.Router();

const crearCuenta = "crear-cuenta";
const adoptantePath = "crear-adoptante";
const fundacionPath = "crear-fundacion";
const creacionPath = "crearDatos";
const localidad = "localidad";
const tipoDoc = "tipoDoc";
const genero = "genero";

router.post(`/${creacionPath}/${genero}`, controllerDatosSignUp.crearGenero);
router.post(
  `/${creacionPath}/${localidad}`,
  controllerDatosSignUp.crearLocalidad
);
router.post(`/${creacionPath}/${tipoDoc}`, controllerDatosSignUp.crearTipoDoc);

router.get(
  `/${crearCuenta}/${adoptantePath}`,
  controllerDatosSignUp.getDatosSignUp
);
router.get(
  `/${crearCuenta}/${fundacionPath}`,
  controllerDatosSignUp.getDatosSignUp
);

// router.delete(`/eliminarSeccion/:id`, );

module.exports = router;
