import { Request, Response } from "express";
//estructura de respuestas
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
//rutas de los servicios funcionales
import { insertUsuario, getUsuario, getUsuarioLogin } from "../services/usuario.services";

//funcion para obtener todos los usuarios
export const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    //no se le pasa parametros por ser un select all
    const response = await getUsuario();
    //si la respuesta fue o no vacia
    if (response == null) {
      return res.json ({
        msg: "Usuarios no encontrados",
        error: true,
        data: response,
      });
    } else {
      return res.json ({
        msg: "Usuarios obtenidos",
        error: false,
        data: response,
      });
    }
  } catch (error) {
    return handleHttp(res, "Error al obtener el usuario", error);
  }
};

//funcion de crear usuario
export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    //en el body se le pasan todos los datos si cumplieron con la validacion previa
    const response = await insertUsuario(req.body);
    //respuesta o no en caso de fallar la operacion
    const respuesta: Respuesta = {
      msg: "Usuario creado",
      error: false,
      data: response,
    };

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al crear el usuario", error);
  }
};

//funcion para el login de usuario
export const loginUsuario = async (req: Request, res: Response): Promise<Response> => {
  try {
    //recibe el email y contraseña en el body
    const response = await getUsuarioLogin(req.body);

    var respuesta: Respuesta;
    //si no hay similitud se avisa del error
    if (response == "NO_MATCH") {
      respuesta = {
        msg: "Correo y/o contraseña incorrectos",
        error: true,
        data: null,
      };
      return res.status(401).json(respuesta);
    } else {
      respuesta = {
        msg: "Login exitoso",
        error: false,
        data: response,
      };
      return res.json(respuesta);
    }
  } catch (error) {
    return handleHttp(res, "Error al hacer login", error);
  }
};