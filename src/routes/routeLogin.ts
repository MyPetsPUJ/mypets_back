import express from "express";
import { controllerLogin } from "../controllers/controllerLogin";

import { tokenValidation } from "../lib/validateToken";

const router = express.Router();
const loginPath = "login";
const profilePath = "profile";

router.get(`/${loginPath}`, controllerLogin.dentroLogin);

router.post(`/${loginPath}`, controllerLogin.hacerLogin);

router.get(`/${profilePath}`, tokenValidation, controllerLogin.profile);

module.exports = router;
//export default router;
