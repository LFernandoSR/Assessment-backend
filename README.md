## Assessment-backend
Repositorio con los resultados del ejercicio de prueba sobre el backend de una libreria  
Todos los puntos del ejercicio funcionan y fueron comprobados antes de subir en caso de duda o aclaracion mandar mensaje  

## Requisitos antes de instalar
Tener node instalado  
Tener PostgreSQL  
Crear base de datos llamada: bookstore  
Agregar archivo .env y sus variables  

## Variables en .env (borrar el que hay en el proyecto o cambiarlo con los datos propios)
DATABASE_URL="postgresql://TuUsuario:TuContraseña@localhost:5432/bookstore?schema=public"  
ACCESS_TOKEN_SECRET='cda9e69a596155d6508c6f20f152baee27ad9bf41fadfdbb695b347bdef04fbb50ff672af77a3cdef9cc6b4281fbee8d5e841f0a5c7b0d625867b6c28880ca69'  
PORT=3000  

## Comandos instalacion
npm install  
npx prisma db push  
npx prisma db seed  
los ultimos dos crean la base de datos con datos, pocos pero son de prueba 

## Comandos para correr API
npm run dev  

# ejemplo de solicitud
POST http://localhost:3000/books  
body json  
{  
  "author": "Odin Dupeyron",  
  "isbn": "9786070733932",  
  "release_date": "2002-01-30",  
  "title": "Y colorín colorado este cuento aún no se ha acabado"  
}  
header authorization  
jwt token por ejemplo (no funcionara si no fue creado en el equipo)  
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbEBnbWFpbC5jb20iLCJ0aXBvIjoiVXN1YXJpbyIsImlhdCI6MTcwNDI1MzE4NCwiZXhwIjoxNzA0MzM5NTg0fQ.7GPKjqcaG6Fwq-u7YDaUMxN4Z9duQwVkJVzSEuwq730"
