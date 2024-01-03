import { Request, Response } from "express";
import { validationResult } from "express-validator";
//componente creado para el manejo de errores
import { handleHttp } from "../utils/error.handle";
//valida que la peticion no este vacia o tenga errores
export const validate = (req: Request, res: Response, next: any) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return handleHttp(res, errors.array()[0].msg, errors.array());
  }

  next();
};
