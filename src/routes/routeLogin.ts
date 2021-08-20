import express, {Request, Response, NextFunction} from 'express';
import {controllerLogin} from '../controllers/controllerLogin';

const router = express.Router();
const loginPath = "login";


router.get(`/${loginPath}`, controllerLogin.dentroLogin);

router.post(`/${loginPath}`, controllerLogin.hacerLogin);



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

module.exports = router
//export default router;