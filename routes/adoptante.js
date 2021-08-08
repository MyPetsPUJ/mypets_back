const express = require ('express');
const bcrypt = require ('bcrypt');

const Adoptante = require('../models/adoptante');

const router = express.Router();

router.get("/crear-cuenta/crear-adoptante", (req, res, next) =>{
    res.send([1,2,3]);
    console.log("Dentro de adoptante");
});

router.post("/crear-cuenta/crear-adoptante", (req, res, next) =>{
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const adoptante = new Adoptante({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            fecha_nacimiento: req.body.fecha_nacimiento,
            genero: req.body.genero,
            localidad: req.body.localidad,
            correo: req.body.correo,
            num_celular: req.body.num_celular,
            password: hash
        });
        adoptante.save()
        .then(result => {
            res.status(201).json({
                message: 'Adoptante creado',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
    });
});

module.exports = router;