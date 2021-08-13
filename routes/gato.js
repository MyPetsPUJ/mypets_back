const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController')

const Gato = require('../src/models/gato');

router.get("/dashboard/seleccion-animal/crear-animal-gato", (req, res, next) => {
    res.send([5,5,5]);
    console.log("Dentro de crear gato");
    next();
});

router.post("/dashboard/seleccion-animal/crear-animal-gato", (req, res) => {
//TODO: terminar
animalController.crearAnimal
});


module.exports = router;