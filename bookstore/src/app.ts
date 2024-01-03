import express from "express";
//libreria para seguridad en el http de respuestas en los header
import helmet from "helmet";
//middleware de http para node js
import morgan from "morgan";

import UsersRoutes from "./routes/users.routes";
import BooksRoutes from "./routes/books.routes";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// rutas para crear, consultar y login de usuarios
app.use("/auth", UsersRoutes);
// rutas para crear, consultar y borrar libros
app.use("/books", BooksRoutes);

export default app;
