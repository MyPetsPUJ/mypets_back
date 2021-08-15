"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/dashboard/seleccion-animal/crear-animal-gato", (req, res, next) => {
    res.send([5, 5, 5]);
    console.log("Dentro de crear gato");
    next();
});
router.post("/dashboard/seleccion-animal/crear-animal-gato", (req, res) => {
    //TODO: terminar
    //animalController.crearAnimal
});
module.exports = router;
//export default router;
