import express from "express";
import { controllerAdmin } from "../controllers/usuarios/controllerAdmin";

const routerAdmin = express.Router();

const crearAdmin = "crear-administrador";
const ping = "ping";

routerAdmin.post(`/${crearAdmin}`, controllerAdmin.crearAdmin);

routerAdmin.get(`/${ping}`, controllerAdmin.ping);

// module.exports = routerAdmin;

export default routerAdmin;
