import express from "express";
import { controllerGenero } from "../controllers/datos-app/controllerGenero";

const router = express.Router();

const crearCuenta = "crear-cuenta";
const adoptantePath = "crear-adoptante";
const creacionPath = "crearGeneros";

router.post(`/${creacionPath}`, controllerGenero.crearGeneros);

router.get(`/${crearCuenta}/${adoptantePath}`, controllerGenero.getGeneros);


// router.delete(`/eliminarSeccion/:id`, );

module.exports = router;
