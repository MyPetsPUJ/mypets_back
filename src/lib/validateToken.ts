import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../lib/helpers";

export const tokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("auth-token");
  //req.cookies.token;
  
  //req.headers.authorization?.split(" ")[1];
  //req.headers["authorization"];

  if (!token) return res.status(401).json("No token provided");

  try {
    const decoded = jwt.verify(token, config.SECRET_KEY);

    console.log(decoded);

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
