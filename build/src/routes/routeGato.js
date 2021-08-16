"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/dashboard/seleccion-animal/crear-animal-gato", (req, res, next) => {
    console.log("Dentro de crear gato");
    return res.send([5, 5, 5]);
});
router.post("/dashboard/seleccion-animal/crear-animal-gato", (req, res) => {
    //TODO: terminar
    //animalController.crearAnimal
    /*
    console.log("Creando gato");
        console.log(req.body);
        const gato = new Gato({
            nombre: req.body.nombre,
            edad: req.body.edad,
            raza: req.body.raza,
            sexo: req.body.sexo,
            color_ojos: req.body.color_ojos,
            tipo_pelaje: req.body.tipo_pelaje,
            situacion: req.body.situacion,
            ultima_vac: req.body.ultima_vac,
            desparasitado: req.body.desparasitado,
            descripcion: req.body.descripcion,
            esquema_vac: req.body.esquema_vac
        });
        console.log(gato)
        gato.save()
        .then(result =>{
            res.status(201).json({
                message: 'Gato creado',
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
    */
});
module.exports = router;
//export default router;
