import express, {Request, Response, NextFunction} from 'express';
import { controllerAdoptante } from '../controllers/controllerAdoptante';

const router = express.Router();



router.get("/crear-cuenta/crear-adoptante", controllerAdoptante.dentroAdoptante);

router.post("/crear-cuenta/crear-adoptante", controllerAdoptante.crearAdoptante);





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