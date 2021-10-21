import express, { Request, Response, NextFunction } from "express";
import { controllerFormulario } from "../controllers/controllerFormulario";

const router = express.Router();


const dashboardPath = "dashboard-adoptante";
const solicitudPath = "solicitudes-adopcion-adoptante";
const formularioPath = "formulario-adopcion";

router.post(
  `/${dashboardPath}/${solicitudPath}/${formularioPath}`,
  controllerFormulario.crearFormulario
);


router.get(
  `/${dashboardPath}/${solicitudPath}/${formularioPath}`,
  controllerFormulario.getFamiliar
);
    
  module.exports = router;

