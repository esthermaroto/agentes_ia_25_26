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
- [ ] Importar y configurar dotenv en `crud-curl.js`                                                   (ruth)
- [ ] Implementar funciones:                                                                           (ruth)    
  - [ ] `createStudent(studentData)`
  - [ ] `readAllStudents()`
  - [ ] `readStudentById(id)`
  - [ ] `updateStudent(id, studentData)`
  - [ ] `patchStudent(id, partialData)`
  - [ ] `deleteStudent(id)`
- [ ] Ejecutar todas las funciones en orden y mostrar mensajes claros                                  (esther)

## 📚 Parte 3: Documentación CRUD con cURL
- [ ] Documentar cada operación (CREATE, READ ALL, READ BY ID, UPDATE, PATCH, DELETE) en README        (esther)
- [ ] Explicar flags y métodos HTTP                                                                    (esther)
- [ ] Incluir respuestas HTTP reales (headers + body)                                                  (esther) 
- [ ] Capturar y documentar resultados en el README                                                    (ruth)

## ⚡ Parte 4: Thunder Client                                                                                                                                              
- [ ] Crear colección `CRUD Students API`                                                              (ruth)
- [ ] Configurar entorno de variables (`baseUrl`, `port`, `fullUrl`)                                      
- [ ] Crear peticiones:                                                                                           
  - [ ] CREATE Student (POST)                                                                          
  - [ ] GET All Students (GET)                                                                                                 
  - [ ] GET Student by ID (GET)                                                                        
  - [ ] UPDATE Student (PUT)
  - [ ] PATCH Student (PATCH)
  - [ ] DELETE Student (DELETE)
- [ ] Guardar al menos 6 capturas en `images/`
- [ ] Documentar uso de Thunder Client en README con capturas

## 📝 Parte 5: REST Client
- [ ] Crear archivo `peticiones-crud.http`                                                              (esther)
- [ ] Definir variables (@baseUrl, @port, @apiUrl)
- [ ] Implementar operaciones CRUD:
  - [ ] CREATE estudiante
  - [ ] READ todos
  - [ ] READ por ID
  - [ ] READ estudiantes activos
  - [ ] READ por nivel
  - [ ] UPDATE completo (PUT)
  - [ ] PATCH campo específico
  - [ ] DELETE estudiante
- [ ] Probar todas las peticiones en VS Code

## ✅ Parte 6: Script de validación
- [ ] Crear `scripts/validate.sh`                                                                        (ruth)
- [ ] Verificar existencia de archivos y carpetas requeridas
- [ ] Comprobar dependencias en `package.json`
- [ ] Validar existencia de capturas en `images/`
- [ ] Mostrar mensaje final de validación
- [ ] Dar permisos de ejecución y probar en terminal

## 📋 Parte 7: Checklist de progreso
- [x] Crear archivo `checklist.md` (este documento)                                                      (esther)

## 🌿 Parte 8: Git y GitHub
- [x] Crear repositorio en GitHub                                                                        (esther)
- [x] Añadir al profesor como colaborador
- [x] Inicializar Git en proyecto local
- [x] Conectar con remoto y crear rama `main`
- [x] Subir código inicial
- [x] Crear rama `m1/http-request-response`
- [ ] Hacer commits incrementales por fase
- [ ] Subir rama y crear Pull Request hacia `main`
- [ ] Asignar profesor como reviewer
- [ ] Tras aprobación, actualizar `main` local
- [ ] Crear tag `M1/http-request-response` y subirlo
