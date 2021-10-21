import express, { Request, Response, NextFunction } from "express";
import { controllerSolicitudAdopcion } from "../controllers/controllerSolicitudAdopcion";

const router = express.Router();

const dashboardPath = "dashboard-adoptante";
const adoptamePath = "adoptame";
const solicitudPath = "solicitud";

router.post(
    `/${dashboardPath}/${adoptamePath}`,
    controllerSolicitudAdopcion.crearSolicitud
  );

module.exports = router;