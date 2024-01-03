import { body, param } from "express-validator";
import { db } from "../../utils/db";
//Para crear un usuario
export const createUsuarioRules = [
  //que el nombre no este vacio y no se repita en la base de datos
  body("name").notEmpty(),
  body("name").custom((value: string) => {
    return db.users
      .findFirst({
        where: {
          name: value,
        },
      })
      .then((usuario) => {
        if (usuario) {
          throw new Error("El nombre ya esta registrado");
        }
      });
  }),
  //que la contraseña y email no esten vacios y el email tenga formato email y no se repita
  body("password").notEmpty(),
  body("email").isEmail().notEmpty(),
  body("email").custom((value: string) => {
    return db.users
      .findFirst({
        where: {
          email: value,
        },
      })
      .then((usuario) => {
        if (usuario) {
          throw new Error("El email ya esta registrado");
        }
      });
  }),
];
//funcion de login, para el mismo se usa el correo y la contraseña
export const loginUsuarioRules = [body("email").isEmail(), body("password").notEmpty()];
