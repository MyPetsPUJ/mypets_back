import express, { Request, Response, NextFunction } from "express";
import { controllerFormulario } from "../controllers/controllerFormulario";

const router = express.Router();


const dashboardPath = "dashboard-adoptante";
const solicitudPath = "solicitudes-adopcion-adoptante";
const formularioPath = "formulario-adopcion";
const formularioSolicitudPath = "formulario-solicitud";

const prueba = "prueba";

router.post(
  `/${dashboardPath}/${solicitudPath}/${formularioPath}`,
  controllerFormulario.crearFormulario
);

router.get(
  `/${dashboardPath}/${solicitudPath}/${formularioPath}/:id`,
  controllerFormulario.getFormulario
);

router.get(
  `/${dashboardPath}/${solicitudPath}/${formularioPath}`,
  controllerFormulario.getFormularios
);
//pruebas
router.get(
  `/${dashboardPath}/${solicitudPath}/${prueba}`,
  controllerFormulario.getReferenciaFamilia
);

router.get(
  `/${dashboardPath}/${solicitudPath}/${formularioSolicitudPath}/:id`,
  controllerFormulario.populateDatosFormulario
);

router.delete(
  `/${dashboardPath}/${solicitudPath}/${formularioPath}:/id`,
  controllerFormulario.deleteFormulario
)
    
module.exports = router;

