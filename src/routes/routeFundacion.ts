import express, { Request, Response, NextFunction } from "express";
import { controllerFundacion } from "../controllers/controllerFundacion";

import multer from "../lib/multer";

const router = express.Router();

const dashboardPath = "dashboard";
const entidadPath = "crear-cuenta";
const usuarioPath = "crear-fundacion";
const perfilPath = "mi-cuenta";

router.get(
  `/${entidadPath}/${usuarioPath}`,
  controllerFundacion.dentroFundacion
);

router.post(
  `/${entidadPath}/${usuarioPath}`,
  multer.single("image"),
  controllerFundacion.crearFundacion
);

router.get(`/${dashboardPath}`, controllerFundacion.getFundaciones);

router.get(`/${dashboardPath}/:id`, controllerFundacion.getFundacion);

router.put(
  `/${dashboardPath}/${perfilPath}/:id`,
  controllerFundacion.updateFundacion
);

router.delete(
  `/${dashboardPath}/${perfilPath}/:id`,
  controllerFundacion.deleteFundacion
);

module.exports = router;
//export default router;
