import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../lib/helpers";

export const tokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("auth-token");
    //req.headers.authorization?.split(" ")[1];
    //req.headers["authorization"];
    
    
    
    if (!token) return res.status(401).json("No token provided");

    const decoded = jwt.verify(token, config.SECRET_KEY);

    console.log(decoded);

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
