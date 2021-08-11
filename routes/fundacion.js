const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Fundacion = require('../src/models/fundacion');
const app = require('../app');



router.get("/crear-cuenta/crear-fundacion", (req, res) =>{
    res.send([4,5,6]);
    console.log("Dentro de fundacion");
    
});


router.post("/crear-cuenta/crear-fundacion", (req, res, next) =>{
    //bcrypt.hash(req.body.password, 10)
    //.then(function(hash) {
        console.log("Creando fundacion");
        console.log(req.body);
        const fundacion = new Fundacion({
            nombreFund: req.body.nombreFund,
            nombreEncar: req.body.nombreEncar,
            apellidosEncar: req.body.apellidosEncar,
            fecha_creacion: req.body.fecha_creacion,
            localidad: req.body.localidad,
            correo: req.body.correo,
            num_celular: req.body.num_celular,
            contrasena: req.body.contrasena,
            tipo_usuario: 'Fundacion'
        });
        console.log(fundacion)
        fundacion.save()
        const token = jwt.sign({_id: fundacion._id}, 'fundacionkey')
        res.status(200).json({token});

        //.then(result => {
          //  res.status(201).json({
            //    message: 'Fundación creada',
              //  result: result
            //});
        //})
        //.catch(err => {
          //  res.status(500).json({
            //    error: err
            //});
        //});
    //});
});

module.exports = router;