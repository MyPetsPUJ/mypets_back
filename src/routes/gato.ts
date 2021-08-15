import express from 'express';
const router = express.Router();
//import animalController from '../controllers/animalController';
import Gato from '../models/gato';

router.get("/dashboard/seleccion-animal/crear-animal-gato", (req, res, next) => {
    res.send([5,5,5]);
    console.log("Dentro de crear gato");
    next();
});

router.post("/dashboard/seleccion-animal/crear-animal-gato", (req, res) => {
//TODO: terminar
//animalController.crearAnimal
});


module.exports = router;
//export default router;