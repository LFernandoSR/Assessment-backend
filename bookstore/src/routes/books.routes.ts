import { Router } from "express";
//componente validacion de encabezado
import { validate } from "../middleware/validator";
//componente de validacion de token jwt
import { checkJwt } from "../middleware/session";
//constantes o funciones que hacen la solicitud de las rutas
import { createBooks, getBooks, delBooks } from "../controllers/books.controller";
//reglas de estructura de los datos para crear y borrar libros
import { createBooksRules, deleteBooksRules, } from "../middleware/validator/books.rules";

const router = Router();

// Para crear libros
router.post("/", checkJwt, createBooksRules, validate, createBooks);

// Para obtener libros
router.get("/", validate, getBooks);

// Para eliminar libros
router.delete("/:id", checkJwt, deleteBooksRules, validate, delBooks);

export default router;
