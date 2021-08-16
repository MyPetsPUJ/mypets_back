import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();
const jwt = require('jsonwebtoken');

import Fundacion from '../models/modelFundacion';
import app from '../app';



router.get("/crear-cuenta/crear-fundacion", (req: Request, res: Response, next: NextFunction) =>{
    res.send([4,5,6]);
    console.log("Dentro de fundacion");
});

router.post("/crear-cuenta/crear-fundacion",(req: Request, res: Response, next: NextFunction) =>{
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
      .then((result:any) => {
          res.status(201).json({
              message: 'Fundacion creada',
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
*/


module.exports = router;
//export default router;