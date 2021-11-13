import express from "express";
import { controllerLogin } from "../controllers/controllerLogin";

import { tokenValidation } from "../lib/validateToken";

const router = express.Router();
const loginPath = "login";
const profilePath = "profile";

router.post(`/${loginPath}`, controllerLogin.hacerLogin);

module.exports = router;
