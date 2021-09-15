import express, { Request, Response, NextFunction } from "express";
import { controllerFundacion } from "../controllers/controllerFundacion";

import multer from "../lib/multer";

const router = express.Router();

const entidadPath = "crear-cuenta";
const usuarioPath = "crear-fundacion";

router.get(
  `/${entidadPath}/${usuarioPath}`,
  controllerFundacion.dentroFundacion
);

router.post(
  `/${entidadPath}/${usuarioPath}`,
  multer.single("image"),
  controllerFundacion.crearFundacion
);

module.exports = router;
//export default router;
