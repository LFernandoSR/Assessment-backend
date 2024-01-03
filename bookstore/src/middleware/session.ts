import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();

    if (!jwt) {
      return res.status(402).json({ msg: "No se encontró el token" });
    }

    verify(jwt, process.env.ACCESS_TOKEN_SECRET || "", (err, decoded) => {
      if (err) {
        return res.status(402).json({ msg: "Token inválido" });
      }
      req.body.user = decoded;
    });

    next();
  } catch (error) {
    res.status(402).json({ msg: "Error al válidar token" });
  }
};
