import app from "./app";
//datos consultados de .env para correr el sistema en que puerto
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.listen(PORT, () => {
  console.log(`Libreria+ running on port ${PORT}`);
});