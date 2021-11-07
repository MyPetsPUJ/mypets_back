import express, { Request, Response, NextFunction } from "express";
import { controllerProducto } from "../controllers/tienda/controllerProducto";

import multer from "../lib/multer";
import { tokenValidation } from "../lib/validateToken";

