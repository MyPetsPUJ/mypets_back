import express from "express";
import { controllerSecciones } from "../controllers/datos-app/controllerSeccion";

const router = express.Router();

const dashboardPath = "dashboard";
const publicacionesPath ="publicaciones";
const crearPublicacion = "crear-publicacion"
const creacionPath = "crearSecciones";

router.post(`/${creacionPath}`, controllerSecciones.crearSecciones);

router.get(
  `/${dashboardPath}/${publicacionesPath}/${crearPublicacion}`,
  controllerSecciones.getSecciones);


// router.delete(`/eliminarSeccion/:id`, );

module.exports = router;
