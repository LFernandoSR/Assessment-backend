import { Router } from "express";
//componente de validacion
import { validate } from "../middleware/validator";

import { createUser, getUser, loginUsuario } from "../controllers/usuarios.controller";
//reglas de estructura y validaciones para crear y login de usuario
import { createUsuarioRules, loginUsuarioRules} from "../middleware/validator/usuarios.rules";

const router = Router();

// Para crear un usuario
router.post("/register", createUsuarioRules, validate, createUser);

// Para obtener informacion de todos los usuarios
router.get("/", validate, getUser);

// Para hacer login como usuario
router.post("/login", loginUsuarioRules, validate, loginUsuario);

export default router;
