// src/crud-curl.js
import dotenv from "dotenv";
import { exec } from "child_process";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Extraer variables de entorno
const PORT = process.env.PORT;
const API_BASE_URL = process.env.API_BASE_URL;

// Construir la URL base para las peticiones
const BASE_URL = `${API_BASE_URL}:${PORT}/students`;

/**
 * CREATE Student
 * Crear un comando CURL para crear un nuevo estudiante
 * @param {Object} studentData - Datos del estudiante a crear
 */
function createStudent(studentData) {
    // Convertir los datos del estudiante a JSON
    const data = JSON.stringify(studentData);
    // Construir el comando CURL
    const curlCommand = `curl -i -X POST ${BASE_URL} -H "Content-Type: application/json" -d '${data}'`;
    //Ejecutar el comando CURL en la terminal
    exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error en la salida: ${stderr}`);
            return;
        }   
});
}

/**
 * READ ALL Students
 * Crear un comando CURL para leer todos los estudiantes
 * No requiere parámetros
 */
function readAllStudents() {
    // Construir el comando CURL
    const curlCommand = `curl -i -X GET ${BASE_URL}`;
    //Ejecutar el comando CURL en la terminal
    exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error en la salida: ${stderr}`);
            return;
        }   
});
}

/** READ Student by ID
 * Crear un comando CURL para leer un estudiante por ID
 * @param {number} id - ID del estudiante a leer
 */
function readStudentById(id) {
    // Construir la URL para leer un estudiante por ID
    const url = `${BASE_URL}/${id}`;
    // Construir el comando CURL
    const curlCommand = `curl -i -X GET ${url}`;
    //Ejecutar el comando CURL en la terminal
    exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error en la salida: ${stderr}`);
            return;
        }   
});
}

/** UPDATE Student
 * Crear un comando CURL para actualizar un estudiante por ID
 * @param {number} id - ID del estudiante a actualizar
 * @param {Object} studentData - Datos del estudiante a actualizar
 */
function updateStudent(id, studentData) {
    // Convertir los datos del estudiante a JSON
    const data = JSON.stringify(studentData);
    // Construir la URL para actualizar un estudiante por ID
    const url = `${BASE_URL}/${id}`;
    // Construir el comando CURL
    const curlCommand = `curl -i -X PUT ${url} -H "Content-Type: application/json" -d '${data}'`;
    //Ejecutar el comando CURL en la terminal
    exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error en la salida: ${stderr}`);
            return;
        }   
});
}

/** PATCH Student
 * Crear un comando CURL para actualizar parcialmente un estudiante por ID
 * @param {number} id - ID del estudiante a actualizar parcialmente
 * @param {Object} partialData - Datos parciales del estudiante a actualizar
 */
function patchStudent(id, partialData) {
    // Convertir los datos parciales del estudiante a JSON
    const data = JSON.stringify(partialData);
    // Construir la URL para actualizar parcialmente un estudiante por ID
    const url = `${BASE_URL}/${id}`;
    // Construir el comando CURL
    const curlCommand = `curl -i -X PATCH ${url} -H "Content-Type: application/json" -d '${data}'`;
    //Ejecutar el comando CURL en la terminal
    exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error en la salida: ${stderr}`);
            return;
        }   
});
}

/** DELETE Student
 * Crear un comando CURL para eliminar un estudiante por ID
 * @param {number} id - ID del estudiante a eliminar
 */
function deleteStudent(id) {
    // Construir la URL para eliminar un estudiante por ID
    const url = `${BASE_URL}/${id}`;
    // Construir el comando CURL
    const curlCommand = `curl -i -X DELETE ${url}`;
    //Ejecutar el comando CURL en la terminal
    exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error en la salida: ${stderr}`);
            return;
        }   
});
}

// =======================================================
// 💻 Ejecución del script CRUD con ejemplos
// =======================================================
console.log("=== INICIO DE EJECUCIÓN DEL SCRIPT CRUD ====\n");

// 1️⃣ Crear estudiante
console.log("=== CREAR ESTUDIANTE ===");
createStudent({
    name: "Maria Perez",
    email: "maria@hmail.com",
    enrollmentDate: "2023-10-01",
    active: true,
    level: "beginner",
});
console.log("\n");

// 2️⃣ Leer todos los estudiantes
console.log("=== LEER TODOS LOS ESTUDIANTES ===");
readAllStudents();
console.log("\n");

// 3️⃣ Leer un estudiante por ID
console.log("=== LEER ESTUDIANTE POR ID ===");
readStudentById(4);
console.log("\n");

// 4️⃣ Actualizar un estudiante por ID
console.log("=== ACTUALIZAR ESTUDIANTE COMPLETO ===");
updateStudent(5, {
    name: "Lola Benitez  Actualizado",
    email: "lola@gmail.com",
    enrollmentDate: "2025-10-01",
    active: false,
    level: "intermediate", 
});
console.log("\n");

// 5️⃣ Actualizar parcialmente un estudiante por ID (PATCH)
console.log("=== PATCH ESTUDIANTE ===");
patchStudent(5, {
    level: "advanced",
    active: true,
});
console.log("\n");

// 6️⃣ Eliminar un estudiante por ID
console.log("=== ELIMINAR ESTUDIANTE ===");
deleteStudent(4);
console.log("\n");

console.log("=== FIN DE EJECUCIÓN DEL SCRIPT CRUD ====");
