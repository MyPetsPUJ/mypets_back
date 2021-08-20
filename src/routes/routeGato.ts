import express, {Request, Response, NextFunction} from 'express';
import {controllerGato} from '../controllers/controllerGato'

const router = express.Router();

const dashboardPath = "dashboard";
const eleccionPath = "seleccion-animal";
const accionPath = "crear-animal-gato";


router.get(`/${dashboardPath}/${eleccionPath}/${accionPath}`, controllerGato.dentroGato);

router.post(`/${dashboardPath}/${eleccionPath}/${accionPath}`, controllerGato.crearGato);


module.exports = router;
//export default router;