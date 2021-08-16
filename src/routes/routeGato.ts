import express, {Request, Response, NextFunction} from 'express';
import {controllerGato} from '../controllers/controllerGato'

const router = express.Router();


router.get("/dashboard/seleccion-animal/crear-animal-gato", controllerGato.dentroGato);

router.post("/dashboard/seleccion-animal/crear-animal-gato", controllerGato.crearGato);


module.exports = router;
//export default router;