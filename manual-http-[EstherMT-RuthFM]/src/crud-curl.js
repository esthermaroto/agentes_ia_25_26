// src/crud-curl.js
import dotenv from "dotenv";
import { exec as execCallback } from "child_process";
import { promisify } from "util";

// Cargar variables de entorno
dotenv.config();

// Promisify de exec
const exec = promisify(execCallback);

// URL base
const PORT = process.env.PORT;
const API_BASE_URL = process.env.API_BASE_URL;
const BASE_URL = `${API_BASE_URL}:${PORT}/students`;

/**
 * Ejecuta un comando curl en la terminal
 * @param {string} curlCommand - Comando curl a ejecutar
 */
async function runCurl(curlCommand) {
    try {
        const { stdout, stderr } = await exec(curlCommand);
        if (stderr && stderr.trim() !== "") console.warn(`⚠️ ${stderr}`);
        console.log(stdout);
    } catch (error) {
        console.error(`Error al ejecutar el comando: ${error.message}`);
    }
}

/**
 * Crear un nuevo estudiante
 * @param {Object} studentData - Datos del estudiante a crear
 */
async function createStudent(studentData) {
    const data = JSON.stringify(studentData).replace(/"/g, '\\"');
    const curlCommand = `curl -s -i -X POST ${BASE_URL} -H "Content-Type: application/json" -d "${data}"`;
    await runCurl(curlCommand);
}

/**
 * Leer todos los estudiantes
 */
async function readAllStudents() {
    const curlCommand = `curl -s -i -X GET ${BASE_URL}`;
    await runCurl(curlCommand);
}

/**
 * Leer un estudiante por ID
 * @param {string} studentId - ID del estudiante a leer
 */
async function readStudentById(studentId) {
    const curlCommand = `curl -s -i -X GET ${BASE_URL}/${studentId}`;
    await runCurl(curlCommand);
}

/**
 * Actualizar un estudiante completo por ID
 * @param {string} studentId - ID del estudiante a actualizar
 * @param {Object} studentData - Datos completos del estudiante
 */
async function updateStudent(studentId, studentData) {
    const data = JSON.stringify(studentData).replace(/"/g, '\\"');
    const curlCommand = `curl -s -i -X PUT ${BASE_URL}/${studentId} -H "Content-Type: application/json" -d "${data}"`;
    await runCurl(curlCommand);
}

/**
 * Actualizar parcialmente un estudiante por ID
 * @param {string} studentId - ID del estudiante a actualizar
 * @param {Object} partialData - Datos parciales a actualizar
 */
async function patchStudent(studentId, partialData) {
    const data = JSON.stringify(partialData).replace(/"/g, '\\"');
    const curlCommand = `curl -s -i -X PATCH ${BASE_URL}/${studentId} -H "Content-Type: application/json" -d "${data}"`;
    await runCurl(curlCommand);
}

/**
 * Eliminar un estudiante por ID
 * @param {string} studentId - ID del estudiante a eliminar
 */
async function deleteStudent(studentId) {
    const curlCommand = `curl -s -i -X DELETE ${BASE_URL}/${studentId}`;
    await runCurl(curlCommand);
}

// =======================================================
// Ejecución secuencial del script CRUD con ID "c56a"
// =======================================================
async function runCrudFlow() {
    const studentId = "c56a";

    console.log("=== INICIO DE EJECUCIÓN DEL SCRIPT CRUD ====\n");

    console.log("=== CREAR ESTUDIANTE ===");
    await createStudent({
        name: "Maria Perez",
        email: "maria@hmail.com",
        enrollmentDate: "2023-10-01",
        active: true,
        level: "beginner",
    });
    console.log("\n");

    console.log("=== LEER TODOS LOS ESTUDIANTES ===");
    await readAllStudents();
    console.log("\n");

    console.log("=== LEER ESTUDIANTE POR ID ===");
    await readStudentById(studentId);
    console.log("\n");

    console.log("=== ACTUALIZAR ESTUDIANTE COMPLETO ===");
    await updateStudent(studentId, {
        name: "Lola Benitez  Actualizado",
        email: "lola@gmail.com",
        enrollmentDate: "2025-10-01",
        active: false,
        level: "intermediate",
    });
    console.log("\n");

    console.log("=== PATCH ESTUDIANTE ===");
    await patchStudent(studentId, {
        level: "advanced",
        active: true,
    });
    console.log("\n");

    console.log("=== ELIMINAR ESTUDIANTE ===");
    await deleteStudent(studentId);
    console.log("\n");

    console.log("=== FIN DE EJECUCIÓN DEL SCRIPT CRUD ====");
}

// Ejecutar flujo CRUD
runCrudFlow();
