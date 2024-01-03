import { db } from "../utils/db";
//interfaces de estructura de referencia
import { Book, NewBook } from "../interfaces/books.interface";
//libreria para decodificar jwt y conseguir la informacion
import { jwtDecode } from 'jwt-decode';
import { Request } from 'express';

//Funcion para crear un libro
export const insertBooks = async ( req: Request, book: NewBook): Promise<NewBook | null> => {
    // Obtener el token del encabezado Authorization
    const jwtByUser = req.headers.authorization || "";

    // Extraer el token
    const jwt = jwtByUser.split(" ").pop();

    // Validar que el token no esté vacío
    if (!jwt) {
      throw new Error("No se proporcionó un token JWT en el encabezado de autorización.");
    }
    
    // Decodificar el token
    const jwtPayload = jwtDecode(jwt) as { email: string };
    console.log(jwtPayload);

    // Buscar el usuario en la base de datos usando el email que es un parametro que venia en el token
    const user = await db.users.findFirst({
      where: {
        email: jwtPayload.email,
      },
    });

    // Verificar si el usuario existe
    if (!user) {
      throw new Error("El usuario no existe en la base de datos.");
    }

    // Obtener el ID del usuario
    const userId = user.id;

    // Crear el libro asociado al usuario
    const response = await db.books.create({
      data: {
        author: book.author,
        isbn: book.isbn,
        release_date: new Date(book.release_date),
        title: book.title,
        user_id: userId,
      },
    });

    return response;
};

//funcion de consulta 
export const selectBooks = async (): Promise<Book[] | null> => {
  const response = await db.books.findMany({
    //incluye los datos del usuario que registro el libro menos su contraseña
    include: {
      users:{
        select: {
          id: true,
          email: true,
          name: true,
        },
      }
    }
  });

  return response;
};
//funcion para borrar libro
export const deleteBooks = async (id: number): Promise<Book | null> => {
  const response = await db.books.delete({
    //se borra el libro que corresponda al id proporcionado
    //no se ocupan validaciones aqui porque ya se realizaron antes con books.rules
    where: {
      id: id,
    },
  });

  return response;
};
