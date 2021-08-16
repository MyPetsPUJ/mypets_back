"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const modelAdoptante_1 = __importDefault(require("../models/modelAdoptante"));
const jwt = require('jsonwebtoken');
router.get('/login', (req, res, next) => {
    res.send([9, 9, 9]);
    console.log('Dentro de login');
    next();
});
router.post('/login', (req, res) => {
    //const {correo, password, tipo_usuario} = req.body;
    console.log(req.body);
    modelAdoptante_1.default.findOne({ correo: req.body.correo }).then((adoptante) => {
        if (!adoptante) {
            return res.status(401).json({
                message: "Correo inválido"
            });
        }
        if (adoptante.password != req.body.password) {
            return res.status(401).json({
                message: "Contraseña inválida"
            });
        }
        if (adoptante.tipo_usuario != req.body.tipo_usuario) {
            return res.status(401).json({
                message: "El tipo de usuario no coincide"
            });
        }
        const token = jwt.sign({ correo: adoptante.correo, _id: adoptante._id }, 'adoptante_key', { expiresIn: '1h' });
        res.status(200).json({
            token: token
        });
    });
    /*
        Fundacion.findOne({correo: req.body.correo}).then(fundacion =>{
            if(!fundacion){
                return res.status(401).json({
                    message: "Correo inválido"
                });
            }
            if(fundacion.password != req.body.password){
                return res.status(401).json({
                    message: "Contraseña inválida"
                });
            }
            if(fundacion.tipo_usuario != req.body.tipo_usuario){
                return res.status(401).json({
                    message: "El tipo de usuario no coincide"
                });
            }
        });*/
    /*const fundacion = Fundacion.findOne({correo: req.body.correo});

    if(!adoptante || !fundacion){
        return res.status(401).send('El correo no existe, por favor ingrese un correo válido');
    }
    if(adoptante.password != password || fundacion.contrasena != password){
        return res.status(401).send('Contraseña incorrecta');
    }
    if(adoptante.tipo_usuario !== tipo_usuario || fundacion.tipo_usuario != tipo_usuario){
        return res.status(401).send('El tipo de usuario no coincide');
    }

    const token = jwt.sign({_id: adoptante._id}, 'adoptantekey');
          token = jwt.sign({_id: fundacion._id}, 'fundacionkey');

    return res.status(200).json({token});*/
});
/*
router.post('/login', async (req, res) => {

    const {correo, password, tipo_usuario} = req.body;
    const adoptante = await Adoptante.findOne({correo: correo})
    const fundacion = await Fundacion.findOne({correo: correo})

    if(!adoptante || !fundacion){
        return res.status(401).send('El correo no existe, por favor ingrese un correo válido');
    }
    if(adoptante.password !== password || fundacion.contrasena !== password){
        return res.status(401).send('Contraseña incorrecta');
    }
    if(adoptante.tipo_usuario !== tipo_usuario || fundacion.tipo_usuario !== tipo_usuario){
        return res.status(401).send('El tipo de usuario no coincide');
    }

    const token = jwt.sign({_id: adoptante._id}, 'adoptantekey');
    const token = jwt.sign({_id: fundacion._id}, 'fundacionkey');

    return res.status(200).json({token});

});*/
module.exports = router;
//export default router;
