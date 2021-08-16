import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();


//const bcrypt = require ('bcrypt');

import Adoptante from '../models/modelAdoptante';
import jwt from 'jsonwebtoken';
import app from '../app';


router.get("/crear-cuenta/crear-adoptante", (req: Request, res: Response, next: NextFunction) =>{
    res.send([1,2,3]);
    console.log("Dentro de adoptante");
    next();
});


router.post("/crear-cuenta/crear-adoptante",(req: Request, res: Response, next: NextFunction) =>{
    //bcrypt.hash(req.body.password, 10)
    //.then(function(hash) {
        console.log("Creando adoptante");
        console.log(req.body);
        const adoptante = new Adoptante({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            fecha_nacimiento: req.body.fecha_nacimiento,
            genero: req.body.genero,
            localidad: req.body.localidad,
            correo: req.body.correo,
            num_celular: req.body.num_celular,
            password: req.body.password,
            tipo_usuario: 'Adoptante'
        });
        console.log(adoptante)
        adoptante.save()
        .then((result:any) => {
            res.status(201).json({
                message: 'Adoptante creado',
                result: result
            });
        })
        .catch((err:any) => {
            res.status(500).json({
                error: err
            });
        });
    //});
});


/*
router.post("/crear-cuenta/crear-adoptante", async (req, res, next) =>{
    //bcrypt.hash(req.body.password, 10)
    //.then(function(hash) {
        console.log("Creando adoptante");
        console.log(req.body);
        const adoptante = new Adoptante({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            fecha_nacimiento: req.body.fecha_nacimiento,
            genero: req.body.genero,
            localidad: req.body.localidad,
            correo: req.body.correo,
            num_celular: req.body.num_celular,
            password: req.body.password,
            tipo_usuario: 'Adoptante'
        });
        console.log(adoptante)
        await adoptante.save()
        const token = jwt.sign({_id: adoptante._id}, 'adoptantekey')  
        res.status(201).json({
                token
                //message: 'Adoptante creado',
                //result: result
            });
        
        //.catch(err => {
            //res.status(500).json({
                //error: err
            //});
        //});
    //});
});*/


module.exports = router;
//export default router;