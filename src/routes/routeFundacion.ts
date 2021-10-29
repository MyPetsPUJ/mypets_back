import express, { Request, Response, NextFunction } from "express";
import { controllerFundacion } from "../controllers/usuarios/controllerFundacion";

import { tokenValidation } from "../lib/validateToken";

import multer from "../lib/multer";

const router = express.Router();

const dashboardPath = "dashboard-adoptante";
const dashboardFunPath = "dashboard";
const entidadPath = "crear-cuenta";
const usuarioPath = "crear-fundacion";
const perfilPath = "mi_cuenta";
const fundacionesPath = "get-fundaciones";
const fundacionPath = "get-fundacion";
const publicacionesPath = "publicaciones";

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
  `/${dashboardFunPath}/${perfilPath}/:id`,
  controllerFundacion.getFundacion
);

// router.get(
//   `/${dashboardFunPath}/${publicacionesPath}/:id`,
//   controllerFundacion.getFundacion
// );

router.put(
  `/${dashboardFunPath}/${perfilPath}/:id`,
  [multer.single("image"), tokenValidation],
  controllerFundacion.updateFundacion
);

router.delete(
  `/${dashboardFunPath}/${perfilPath}/:id`,
  controllerFundacion.deleteFundacion
);

module.exports = router;
//export default router;
