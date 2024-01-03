import { body, param } from "express-validator";
import { db } from "../../utils/db";
//Comprobaciones realizadas sobre los datos que se piden para crear un libro nuevo
export const createBooksRules = [
  //que se tenga autor
  body("author").notEmpty().isLength({ min: 1, max: 64 }),
  //que se tenga isbn y no se repita
  body("isbn").notEmpty().isString(),
  body("isbn").custom((value: string) => {
      return db.books
        .findFirst({
          where: {
            isbn: value,
          },
        })
        .then((book) => {
          if (book) {
            throw new Error("El ISBN YA existe");
          }
        });
    }),
    //que se tenga titulo y sea string
  body("title").notEmpty().isString().isLength({ min: 1, max: 64 }),
  //que no este vacia la fecha de salida
  body("release_date").notEmpty(),
];

//Comprobaciones realizadas sobre los datos que se piden para borrar un libro
export const deleteBooksRules = [
  //que se tenga id y exista un libro al cual corresponde dicho id
  param("id").notEmpty().isInt(),
  param("id").custom((value: string, { req }) => {
    return db.books
      .findUnique({
        where: {
          id: parseInt(value),
        },
      })
      .then((libro) => {
        if (!libro) {
          throw new Error("El id del libro no existe");
        } 
      });
  }),
];
