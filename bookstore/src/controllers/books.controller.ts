import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Respuesta } from "../interfaces/respuesta.interface";
import { insertBooks, selectBooks, deleteBooks } from "../services/books.services";
//llamado a funcion para crear libro
export const createBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    //se le pasa el encabezado y el body
    const response = await insertBooks(req, req.body);
    //se recibe respuesta y dependiendo de la misma se establece el mensaje
    var respuesta: Respuesta;
    //si se creo o no el libro
    if (response == null) {
      respuesta = {
        msg: "No se pudo crear el libro",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "libro creado",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al crear el libro", error);
  }
};
//llamado a funcion para consultar los libros
export const getBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    //es un select all no ocupa parametros
    const response = await selectBooks();

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo obtener los libros",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Libros obtenidos",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al obtener los libros", error);
  }
};
//llamado de funcion para borrar un libro
export const delBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    //al pasarle el id como parte del encabezado es params en lugar de body
    //ademas al ser un int se debe realizar la conversion al venir en string el encabezado
    const response = await deleteBooks(parseInt(req.params.id));

    var respuesta: Respuesta;

    if (response == null) {
      respuesta = {
        msg: "No se pudo eliminar el libro",
        error: true,
        data: response,
      };
    } else {
      respuesta = {
        msg: "Libro eliminado",
        error: false,
        data: response,
      };
    }

    return res.json(respuesta);
  } catch (error) {
    return handleHttp(res, "Error al eliminar el libro", error);
  }
};
