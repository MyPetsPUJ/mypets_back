import express, { Request, Response, NextFunction } from "express";
import { controllerSolicitudAdopcion } from "../controllers/controllerSolicitudAdopcion";

const router = express.Router();

const dashboardPath = "dashboard-adoptante";
const dashboardFundacionPath ="dashboard"
const adoptamePath = "adoptame";
const solicitudPath = "solicitud-adopcion";
const solicitudAdoptantePath = "solicitud-adoptante";
const listaSolicitudesPah = "solicitud-fundacion";
const solicitudAdoptantePreviewPath = "eliminar-solicitud-adoptante";
const solicitudesPath = "solicitudes"

router.post(
    `/${dashboardPath}/${adoptamePath}/${solicitudPath}`,
    controllerSolicitudAdopcion.crearSolicitud
);

router.get(
    `/${dashboardPath}/${adoptamePath}/${solicitudPath}`,
    controllerSolicitudAdopcion.getSolicitudes
);

router.get(
    `/${dashboardPath}/${adoptamePath}/${solicitudAdoptantePath}/:id`,
    controllerSolicitudAdopcion.getSolicitudesAdoptante
);

router.get(
    `/${dashboardPath}/${adoptamePath}/${listaSolicitudesPah}/:id`,
    controllerSolicitudAdopcion.populateSolicitudesFundacion
);

router.delete(
    `/${dashboardPath}/${adoptamePath}/${solicitudPath}/${solicitudAdoptantePreviewPath}/:id`,
    controllerSolicitudAdopcion.deleteSolicitud
);

router.put(
    `/${dashboardFundacionPath}/${solicitudesPath}/:id`,
    controllerSolicitudAdopcion.updateSolicitud
)

module.exports = router;