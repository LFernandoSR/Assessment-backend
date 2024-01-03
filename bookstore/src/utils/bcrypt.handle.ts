import { hash, compare } from "bcrypt";

const saltRounds = 10;
//encripta con metodo de hasheo la contraseña
export const encrypt = async (password: string): Promise<string> => {
  const salt = await hash(password, saltRounds);
  return salt;
};
//verifica la contraseña ya con el hash
export const verify = async (password: string, hash: string): Promise<boolean> => {
  const result = await compare(password, hash);
  return result;
};
