import { db } from "../src/utils/db";
//creacion de datos iniciales del sistema
type Usuario = {
  id: number;
  email: string;
  name: string;
  password: string;
};

type Libro = {
  id: number;
  author: string;
  isbn: string;
  release_date: Date;
  title: string;
  user_id: number;
};

async function seed() {
  // Crear usuarios
  await Promise.all(
    getUsers().map((usuario) => {
      return db.users.create({
        data: {
          id: usuario.id,
          email: usuario.email,
          name: usuario.name,
          password: usuario.password,
        },
      });
    })
  );

  // Crear libros
  await Promise.all(
    getBooks().map((libro) => {
      return db.books.create({
        data: {
          id: libro.id,
          author: libro.author,
          isbn: libro.isbn,
          release_date: libro.release_date,
          title: libro.title,
          user_id: libro.user_id,
        },
      });
    })
  );
}

seed();

function getUsers(): Array<Usuario> {
  return [
    {
      id: 1,
      email: "fernando7@gmail.com",
      name: "Luis Fernando Sanchez Ruiz",
      password: "$2b$10$omD0GEfGAE/i4Bod7/5pvuDAJXeEdQgUZN8lhab0Q83fYe5HHGSsq", //OLak&%1234
    },
    {
      id: 2,
      email: "luis7@gmail.com",
      name: "Luis Angel Sanchez Ruiz",
      password: "$2b$10$DKNPgasFY.2WBAJTzO8Myey6JBeTHsCp9wn8quKmlg1xy0xtTZGaO", //AbCdEfGhI1!@3jK4
    },
  ];
}

function getBooks(): Array<Libro> {
  return [
    {
      id: 1,
      author: "Gabriel García Márquez",
      isbn: "9786070728792",
      release_date: new Date('1967-05-15'),
      title: "Cien años de soledad",
      user_id: 2
    },
    {
      id: 2,
      author: "Umberto Eco",
      isbn: "9780151446476",
      release_date: new Date('1980-03-14'),
      title: "El nombre de la rosa",
      user_id: 2
    },
  ];
}
