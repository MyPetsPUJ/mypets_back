import express, { Request, Response, NextFunction } from "express";
import { controllerSolicitudAdopcion } from "../controllers/controllerSolicitudAdopcion";

const router = express.Router();

const dashboardPath = "dashboard-adoptante";
//const dashboardFundacionPath ="dashboard"
const adoptamePath = "adoptame";
const solicitudPath = "solicitud-adopcion";
const solicitudAdoptantePath = "solicitud-adoptante";
const solicitudFundacionPath = "solicitud-fundacion";
const listaSolicitudesPath = "lista-solicitudes";
const solicitudAdoptantePreviewPath = "eliminar-solicitud-adoptante";
const solicitudesPath = "solicitudes";
const eliminarPath = "eliminar-solicitud"

router.post(
    `/${dashboardPath}/${solicitudPath}`,
    controllerSolicitudAdopcion.crearSolicitud
);

router.get(
    `/${dashboardPath}/${solicitudPath}/:id`,
    controllerSolicitudAdopcion.getSolicitud
);

router.get(
    `/${dashboardPath}/${solicitudPath}`,
    controllerSolicitudAdopcion.getSolicitudes
);

router.get(
    `/${dashboardPath}/${solicitudAdoptantePath}/:id`,
    controllerSolicitudAdopcion.getSolicitudesAdoptante
);

router.get(
    `/${dashboardPath}/${solicitudFundacionPath}/:id`,
    controllerSolicitudAdopcion.getSolicitudesFundacion
);

router.get(
    `/${dashboardPath}/${listaSolicitudesPath}/:id`,
    controllerSolicitudAdopcion.populateSolicitudesFundacion
);

router.delete(
    //`/${dashboardPath}/${adoptamePath}/${solicitudPath}/${solicitudAdoptantePreviewPath}/:id`,
    `/${dashboardPath}/${solicitudPath}/${eliminarPath}/:id`,
    controllerSolicitudAdopcion.deleteSolicitud
);

router.put(
    `/${dashboardPath}/${solicitudPath}/:id`,
    controllerSolicitudAdopcion.updateEstadoSolicitud
)

module.exports = router;