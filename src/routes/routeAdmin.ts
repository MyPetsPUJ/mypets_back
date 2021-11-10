import express from "express";
import { controllerAdmin } from "../controllers/usuarios/controllerAdmin";

const router = express.Router();


const crearAdmin = "crear-administrador";

router.post(`/${crearAdmin}`, controllerAdmin.crearAdmin);

module.exports = router;
