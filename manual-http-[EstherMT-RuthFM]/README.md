# CRUD HTTP Manual con cURL, Thunder Client y REST Client

Este proyecto implementa un sistema completo de gestión de estudiantes mediante peticiones HTTP,
 utilizando una API local con json-server. 

    -cURL (linea de comandos)
    -Thunder Client (interfaz gráfica)
    -REST Client (archivos `.http`)

## Parte 1: Configuración inicial

#### Requisitos
- Node.js v18+
- Git
- Visual Studio Code con extensiones:
  - Thunder Client
  - REST Client

#### Instalación

```bash 
npm install
npm run server:up
```
>El servidor se levanta en http://localhost:4000


## Parte 2: Funciones CRUD con cURL

### CREATE - Crear estudiante

Crea un nuevo estudiante en el sistema enviando sus datos en formato JSON.

```bash
curl -i -X POST http://localhost:4000/students \ 
-H "Content-Type: application/json" \ 
-d '{"name":"Juan Perez","email":"juan@hmail.com","enrollmentDate":"2023-10-01","active":true,"level":"beginner"}'
```

| Flag | Descripción |
|------|-------------|
| -i | Muestra los headers de la respuesta HTTP |
| -X POST | Indica el método HTTP POST |
| -H "Content-Type: application/json" | Especifica que el cuerpo de la petición está en formato JSON |
| -d | Define los datos que se envían en el cuerpo de la petición |


**Headers enviados**

- Content-Type: application/json → Indica que se envía un cuerpo en formato JSON.


**Respuesta HTTP**

![Crear nuevo estudiante](imagenes/cURL/crear_estudiante_curl.png)

**Código de estado**

- 201 Created → El recurso fue creado exitosamente.


### READ ALL - Leer todos los estudiantes

Recupera la lista de todos los estudiantes.

```bash
curl -i -X GET http://localhost:4000/students
```

| Flag | Descripción |
|------|-------------|
| -i | Muestra los headers |
| -X GET | Método HTTP para obtener datos |


**Headers enviados**

- No se requieren headers adicionales.


**Respuesta HTTP**

![Leer todos los estudiantes](imagenes/cURL/leer_todo_los_estudiantes_curl.png)

**Código de estado**

- 200 OK → Petición exitosa.

### READ BY ID - Leer estudiante por ID

Obtiene los datos de un estudiante específico por su ID.

```bash
curl -i -X GET http://localhost:4000/students/7
```

| Flag | Descripción |
|------|-------------|
| -i | Muestra los headers |
| -X GET | Método HTTP GET |


**Headers enviados**

- No se requieren headers adicionales.


**Respuesta HTTP**

![Leer todos los estudiantes](imagenes/cURL/leer_estudiante_por_id_curl.png)

**Código de estado**

- 200 OK → Petición exitosa.


### UPDATE - Actualizar estudiante (PUT)

Reemplaza completamente los datos de un estudiante por ID

```bash
curl -i -X PUT http://localhost:4000/students/6 \ 
-H "Content-Type: application/json" \
-d '{"name":"Maria Perez Actualizado","email":"maaa@gmail.com","enrollmentDate":"2023-10-01","active":false,"level":"intermediate"}'
```

| Flag | Descripción |
|------|-------------|
| -X PUT | Método HTTP para reemplazar completamente un recurso |


**Headers enviados**

- Content-Type: application/json


**Respuesta HTTP**

![Leer todos los estudiantes](imagenes/cURL/update_estudiante_curl.png)

**Código de estado**

- 200 OK → Petición exitosa.


###  PATCH - Actualización parcial

Modifica parcialmente los datos de un estudiante por ID.

```bash
curl -i -X PATCH http://localhost:4000/students/6 \
-H "Content-Type: application/json" \
-d '{"level":"advanced","active":true}'     
```

| Flag | Descripción |
|------|-------------|
| -X PATCH | Método HTTP para modificar parcialmente un recurso |

**Headers enviados**

- Content-Type: application/json


**Respuesta HTTP**

![Leer todos los estudiantes](imagenes/cURL/patch_estudiante_curl.png)

**Código de estado**

- 200 OK → Petición exitosa.

###  DELETE - Eliminar estudiante

Elimina un estudiante por su ID.

```bash
curl -i -X DELETE http://localhost:4000/students/7   
```

| Flag | Descripción |
|------|-------------|
| -X DELETE | Método HTTP para eliminar un recurso |

**Headers enviados**

- No se requieren headers adicionales.


**Respuesta HTTP**

![Leer todos los estudiantes](imagenes/cURL/eliminar_estudiantes_curl.png)

**Código de estado**

- 200 OK → Petición exitosa.

---

## Parte 4: Thunder Client

### ⚙️ Configuración de Thunder Client

En esta parte se pedía configurar **una colección (Collection)** y **un entorno (Environment)**
en Thunder Client para organizar las peticiones CRUD y definir variables reutilizables
como `{{baseUrl}}`, `{{port}}` y `{{fullUrl}}`.

⚠️ **Nota importante:**  
La **versión gratuita de Thunder Client** no permite crear **Collections** ni **Environments**, 
por lo que no es posible agrupar las peticiones ni definir variables dentro de la herramienta.

Para poder realizar el ejercicio igualmente, se optó por:

- Crear las peticiones **de forma individual**, usando **“New Request”**.  
- Utilizar directamente las **URLs completas** en lugar de variables.

Ejemplo de URLs usadas:


>GET http://localhost:4000/students

>GET http://localhost:4000/students/1

>POST http://localhost:4000/students

>PUT http://localhost:4000/students/1

>PATCH http://localhost:4000/students/1

>DELETE http://localhost:4000/students/1


En la versión completa de Thunder Client, la configuración del entorno y la colección sería la siguiente:

| Variable | Valor | Descripción |
|-----------|--------|-------------|
| baseUrl | http://localhost | Dirección base del servidor |
| port | 4000 | Puerto donde corre json-server |
| fullUrl | {{baseUrl}}:{{port}}/students | Endpoint completo de la API |

Esto permitiría crear una **Collection llamada “CRUD Students API”** y dentro de ella
6 peticiones (POST, GET, GET by ID, PUT, PATCH, DELETE), usando la variable `{{fullUrl}}`
para simplificar las pruebas.

En esta versión gratuita, dichas peticiones se han realizado igualmente y se documentan acontinuación con sus capturas de pantalla.

### 📄 Documentación de uso de Thunder Client

Para probar la API de **Students** se utilizó **Thunder Client**, una extensión de VS Code que permite realizar peticiones HTTP de forma sencilla.

#### Cómo usar Thunder Client

1. Abrir **Thunder Client** desde la barra lateral de VS Code.
2. Crear una nueva petición (`New Request`) o usar una existente.
3. Seleccionar el método HTTP adecuado según la operación:

| Operación | Método | URL ejemplo |
|-----------|--------|------------|
| Crear estudiante | POST | `http://localhost:4000/students` |
| Obtener todos los estudiantes | GET | `http://localhost:4000/students` |
| Obtener estudiante por ID | GET | `http://localhost:4000/students/1` |
| Actualizar estudiante | PUT | `http://localhost:4000/students/1` |
| Modificar estudiante | PATCH | `http://localhost:4000/students/1` |
| Eliminar estudiante | DELETE | `http://localhost:4000/students/1` |

4. Para **GET**, no es necesario añadir `Body` ni `Headers`.  
   Para **POST, PUT y PATCH**, se debe enviar un JSON en el `Body` con los datos del estudiante, por ejemplo:

```json
{
  "name": "Juan Pérez",
  "email": "juan.perez@email.com",
  "enrollmentDate": "2024-10-08",
  "active": true,
  "level": "beginner"
}
```
5. Hacer clic en **Send** y verificar la respuesta en el panel de la derecha:

- **Status** indica si la operación fue exitosa (200, 201, 204, etc.)
- **Body** muestra los datos devueltos por la API.
- **Headers** y **Size** proporcionan información adicional de la petición y respuesta.

#### Capturas de pantalla

A continuación se muestran las capturas de cada petición realizada, con la información de **Request** y **Response** visible.  

---

### CREATE Student
Crea un nuevo estudiante enviando los datos en formato JSON.  

![Request CREATE Student](imagenes/thunder_client/thunder-create-student.png)  
![Response CREATE Student](imagenes/thunder_client/thunder-create-student_1.png)  

---

### GET All Students
Solicita todos los estudiantes y devuelve un array con la información de cada uno.  

![Request GET All Students](imagenes/thunder_client/thunder-get-all-students.png)  
![Response GET All Students](imagenes/thunder_client/thunder-get-all-students_1.png)  

---

### GET Student by ID
Recupera un estudiante específico usando su ID.  

![Request GET Student by ID](imagenes/thunder_client/thunder-get-student-by-id.png)  
![Response GET Student by ID](imagenes/thunder_client/thunder-get-student-by-id_1.png)  

---

### UPDATE Student (PUT)
Sustituye completamente los datos de un estudiante existente.  

![Request UPDATE Student](imagenes/thunder_client/thunder-update-student-put.png)  
![Response UPDATE Student](imagenes/thunder_client/thunder-update-student-put_1.png)  

---

### PATCH Student
Modifica parcialmente los datos de un estudiante existente.  

![Request PATCH Student](imagenes/thunder_client/thunder-patch-student.png)  
![Response PATCH Student](imagenes/thunder_client/thunder-patch-student_1.png)  

---

### DELETE Student
Elimina un estudiante de la base de datos según su ID.  

![Request DELETE Student](imagenes/thunder_client/thunder-delete-student.png)  
![Response DELETE Student](imagenes/thunder_client/thunder-delete-student_1.png)  

---

## Parte 5: REST Client
REST Client es una extensión de Visual Studio Code que permite enviar peticiones HTTP directamente desde archivos `.http`. 
En este proyecto se ha creado el archivo `peticiones-crud.http` en la raíz del proyecto para documentar y probar todas las operaciones CRUD sobre la colección `students`.

---

#### Variables definidas

```http
    @baseURL = http://localhost
    @port = 4000
    @apiUrl = {{baseURL}}:{{port}}/students
```

----

#### Operaciones CRUD

- ###### CREATE estudiante

```http
POST {{apiUrl}}
Content-Type: application/json

{
"name": "Esther Maroto",
"email": "esther.maroto@email.com",
"enrollmentDate": "2025-10-07",
"active": true,
"level": "intermediate"
}
```

![Crear nuevo estudiante](imagenes/REST_client/Crear_nuevo_estudiante.png)

- ###### READ todos

```http
GET {{apiUrl}}
```

![Leer todos los estudiantes](imagenes/REST_client/mostrar_todos_los_estudiantes.png)


- ###### READ por ID

```http
GET {{apiUrl}}/1
```

![Leer estudiante por ID](imagenes/REST_client/obtener_estudiantes_id.png)



- ###### READ estudiantes activos

```http
GET {{apiUrl}}?active=true
```

![Leer estudiantes activos](imagenes/REST_client/obtener_estudiantes_activos.png)

- ###### READ por nivel

```http
GET {{apiUrl}}?level=intermediate
```

![Leer estudiantes por nivel](imagenes/REST_client/obtener_estudiantes_nivel.png)


- ###### UPDATE completo (PUT)

```http
PUT {{apiUrl}}/1
Content-Type: application/json

{
  "name": "Luis Maroto",
  "email": "luis.maroto@email.com",
  "enrollmentDate": "2025-10-07",
  "active": true,
  "level": "beginner"
}
```

![Actualizar estudiante completo](imagenes/REST_client/actualizacion_completa.png)


- ###### PATCH campo específico

```http
PATCH {{apiUrl}}/3
Content-Type: application/json

{
    "level": "intermediate"
}
```

![Actualizar estudiante parcialmente](imagenes/REST_client/actualizar_campo_concreto.png)


- ###### DELETE estudiante

```http
DELETE {{apiUrl}}/1
```

![Eliminar estudiante](imagenes/REST_client/eliminar_estudiante.png)



  