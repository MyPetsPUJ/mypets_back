import express, { Request, Response, NextFunction } from "express";
import { controllerAdoptante } from "../controllers/controllerAdoptante";



const router = express.Router();
const entidadPath = "crear-cuenta";
const usuarioPath = "crear-adoptante";

router.get(
  `/${entidadPath}/${usuarioPath}`,
  controllerAdoptante.dentroAdoptante
);

router.post(
  `/${entidadPath}/${usuarioPath}`,
  controllerAdoptante.crearAdoptante
);



module.exports = router;
//export default router;
