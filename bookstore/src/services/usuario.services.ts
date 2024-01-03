import { db } from "../utils/db";
//librerias para encriptar y verificar datos
import { encrypt, verify } from "../utils/bcrypt.handle";
//token de sesion
import jwt from "jsonwebtoken";
//estructuras para los distintos casos
import { Usuario, UsuarioLogin, UsuarioBrief } from "../interfaces/usuario.interface";

//funcion de creacion de usuario
export const insertUsuario = async (usuario: Usuario): Promise<UsuarioBrief | null> => {
  const password = usuario.password;
  //se realiza un hasheo a la contraseña antes de guardarla
  const hash = await encrypt(password);

  usuario.password = hash;
  //una vez mas no hay comprobaciones porque se realizaron ya en los niveles anteriores
  const newUsuario = await db.users.create({
    data: {
      email: usuario.email,
      name: usuario.name,
      password: usuario.password,
    },
  });

  return newUsuario;
};
//funcion para consultar usuarios
export const getUsuario = async (): Promise<Usuario[] | null> => {
  const response = await db.users.findMany({
    include: {
      books: {
      },
    },
  });

  return response;
};
//funcion para login de usuario
export const getUsuarioLogin = async (usuario: UsuarioLogin): Promise<string | null> => {
  const response = await db.users.findFirst({
    where: {
      email: usuario.email,
    },
  });
  //revision si la contraseña sirve o no
  const passwordsMatch: Boolean = await verify(usuario.password, response?.password || "");

  if (!passwordsMatch) {
    return "NO_MATCH";
  }

  const tokenData = {
    email: response?.email,
    tipo: "Usuario",
  };
  //creacion del token de acceso que se devolvera al usuario que expirara en 24h
  const accessToken = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET || "", { expiresIn: "24h" });

  return accessToken;
};
