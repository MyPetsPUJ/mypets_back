import express, { Request, Response, NextFunction } from "express";
import { controllerFundacion } from "../controllers/controllerFundacion";

import multer from "../lib/multer";

const router = express.Router();

const dashboardPath = "dashboard-adoptante";
const dashboardFunPath = "dashboard";
const entidadPath = "crear-cuenta";
const usuarioPath = "crear-fundacion";
const perfilPath = "mi-cuenta";
const fundacionesPath = "get-fundaciones";
const fundacionPath = "get-fundacion";

// router.get(
//   `/${entidadPath}/${usuarioPath}`,
//   controllerFundacion.dentroFundacion
// );

router.post(
  `/${entidadPath}/${usuarioPath}`,
  multer.single("image"),
  controllerFundacion.crearFundacion
);

router.get(
  `/${dashboardPath}/${fundacionesPath}`,
  controllerFundacion.getFundaciones
);

router.get(
  `/${dashboardPath}/${fundacionPath}/:id`,
  controllerFundacion.getFundacion
);

router.put(
  `/${dashboardPath}/${perfilPath}/:id`,
  controllerFundacion.updateFundacion
);

router.delete(
  `/${dashboardFunPath}/${perfilPath}/:id`,
  controllerFundacion.deleteFundacion
);

module.exports = router;
//export default router;
