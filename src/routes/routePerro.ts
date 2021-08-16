import express, {Request, Response, NextFunction} from 'express';
import {controllerPerro} from '../controllers/controllerPerro'

const router = express.Router();

router.get("/dashboard/seleccion-animal/crear-animal-perro", controllerPerro.dentroPerro);

router.post("/dashboard/seleccion-animal/crear-animal-perro", controllerPerro.crearPerro); 



module.exports = router;
//export default router;