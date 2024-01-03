//estructura para crear
export interface Usuario {
  id: number;
  email: string;
  name: string;
  password: string;
}
//estructura de datos para el login
export interface UsuarioLogin {
  email: string;
  password: string;
}
//estructura de datos para la consulta
export interface UsuarioBrief {
  email: string;
  name: string;
  password: string;
}
