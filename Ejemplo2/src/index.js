//IMPORTACIONES
import dotnev from "dotenv";

//CARGO las variables .env a este fichero
dotnev.config();
//todas las variables están en proces.env.NOMBRE_DE_LA_VARIABLE

//mostrat por consola el valor de las variablese de ENTORNO

console.log("URL de acceso: ",process.env.URL);
console.log("Puerto: ",process.env.PORT);
console.log(`Url con Puerto: ${process.env.URL}:${Number(process.env.PORT)}`)