import express, {Request, Response, NextFunction} from 'express';
import {controllerPerro} from '../controllers/controllerPerro'

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

const dashboardPath = "dashboard";
const eleccionPath = "seleccion-animal";
const accionPath = "crear-animal-perro";

router.get(`/${dashboardPath}/${eleccionPath}/${accionPath}`, controllerPerro.dentroPerro);

router.post(`/${dashboardPath}/${eleccionPath}/${accionPath}`, controllerPerro.crearPerro); 



module.exports = router;
//export default router;