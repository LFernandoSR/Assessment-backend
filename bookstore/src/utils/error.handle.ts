import { Response } from "express";
//estructura de la respuesta para el manejo de errores
import { Respuesta } from "../interfaces/respuesta.interface";
//estructura para mensaje que saldra en el manejo de errores
export const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);

  const respuesta: Respuesta = {
    msg: error,
    error: true,
    data: null,
  };

  return res.status(500).json(respuesta);
};
