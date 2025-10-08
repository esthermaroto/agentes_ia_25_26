# ✅ Checklist de Progreso - CRUD HTTP Manual y Herramientas Visuales

## 🏗 Parte 1: Configuración inicial del proyecto
- [x] Crear carpeta `manual-http-[nombre-iniciales-apellidos]`                                         (esther)
- [x] Inicializar proyecto con `npm init`                                                              (esther)
- [x] Completar `package.json` con nombre, versión, descripción y autor                                (esther)
- [x] Instalar dependencias: `json-server` y `dotenv`                                                  (esther)
- [x] Configurar `type: module` en `package.json`                                                      (esther)
- [x] Añadir scripts en `package.json`:                                                                (esther)
  - [x] `server:up`
  - [x] `crud:curl`
  - [x] `validate`
- [x] Crear estructura de carpetas (`src/`, `scripts/`, `images/`)                                     (esther)    
- [x] Crear archivo `.env` con `PORT=4000`, `API_BASE_URL=http://localhost`, `NODE_ENV=development`    (ruth)
- [x] Crear `.env.example`                                                                             (ruth)       
- [x] Crear `.gitignore`                                                                               (ruth)
- [x] Crear archivo `README.md`                                                                        (esther)
- [x] Crear `src/db/db.json` con estudiantes, cursos y matrículas                                      (ruth)

## 💻 Parte 2: Script CRUD con funciones JavaScript
- [x] Importar y configurar dotenv en `crud-curl.js`                                                   (ruth)
- [x] Implementar funciones:                                                                           (ruth)    
  - [x] `createStudent(studentData)`
  - [x] `readAllStudents()`
  - [x] `readStudentById(id)`
  - [x] `updateStudent(id, studentData)`
  - [x] `patchStudent(id, partialData)`
  - [x] `deleteStudent(id)`
- [x] Ejecutar todas las funciones en orden y mostrar mensajes claros                                  (ruth)

## 📚 Parte 3: Documentación CRUD con cURL
- [x] Documentar cada operación (CREATE, READ ALL, READ BY ID, UPDATE, PATCH, DELETE) en README        (esther)
- [x] Explicar flags y métodos HTTP                                                                    (esther)
- [x] Incluir respuestas HTTP reales (headers + body)                                                  (esther) 
- [x] Capturar y documentar resultados en el README                                                    (ruth)

## ⚡ Parte 4: Thunder Client                                                                                                                                              
- [x] Crear colección `CRUD Students API`                                                              (ruth)
- [x] Configurar entorno de variables (`baseUrl`, `port`, `fullUrl`)                                      
- [x] Crear peticiones:                                                                                           
  - [x] CREATE Student (POST)                                                                          
  - [x] GET All Students (GET)                                                                                                 
  - [x] GET Student by ID (GET)                                                                        
  - [x] UPDATE Student (PUT)
  - [x] PATCH Student (PATCH)
  - [x] DELETE Student (DELETE)
- [x] Guardar al menos 6 capturas en `imagenes/`
- [x] Documentar uso de Thunder Client en README con capturas

## 📝 Parte 5: REST Client
- [x] Crear archivo `peticiones-crud.http`                                                              (esther)
- [x] Definir variables (@baseUrl, @port, @apiUrl)
- [x] Implementar operaciones CRUD:
  - [x] CREATE estudiante
  - [x] READ todos
  - [x] READ por ID
  - [x] READ estudiantes activos
  - [X] READ por nivel
  - [x] UPDATE completo (PUT)
  - [x] PATCH campo específico
  - [x] DELETE estudiante
- [x] Probar todas las peticiones en VS Code

## ✅ Parte 6: Script de validación
- [ ] Crear `scripts/validate.sh`                                                                        (ruth)
- [ ] Verificar existencia de archivos y carpetas requeridas
- [ ] Comprobar dependencias en `package.json`
- [ ] Validar existencia de capturas en `images/`
- [ ] Mostrar mensaje final de validación
- [ ] Dar permisos de ejecución y probar en terminal
