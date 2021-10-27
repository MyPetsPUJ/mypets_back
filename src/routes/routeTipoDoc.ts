import express from "express";
import { controllerTipoDoc } from "../controllers/datos-app/controllerTipoDoc";


const router = express.Router();

const crearCuenta = "crear-cuenta";
const adoptantePath = "crear-adoptante";
const fundacionPath = "crear-fundacion";
const creacionPath = "crearTipoDoc";

router.post(`/${creacionPath}`, controllerTipoDoc.crearTipoDoc);

router.get(
  `/${crearCuenta}/${adoptantePath}`,
  controllerTipoDoc.getTipoDocumentos
);

router.get(
    `/${crearCuenta}/${fundacionPath}`,
    controllerTipoDoc.getTipoDocumentos
  );

// router.delete(`/eliminarSeccion/:id`, );

module.exports = router;
