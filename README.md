
# Mongo Bodegas - Simplificando las Instrucciones de Uso

## Descripción del Proyecto

Mongo Bodegas es un proyecto que utiliza métodos GET y POST, los cuales operan mediante tokens y middlewares.

## Pasos para Utilizar el Proyecto

1. Clona este repositorio en tu máquina local.
2. Instala Node.js en tu sistema. Luego, en la terminal, dentro de la carpeta del proyecto, ejecuta el comando `npm install` para instalar las dependencias.
3. Verifica que los archivos TypeScript se hayan transpilado correctamente usando el comando `npm run tsc`.
4. Asegúrate de configurar las variables de entorno en el archivo `.env` con la conexión al servidor y a la base de datos en Atlas.
5. Conecta la base de datos utilizando la extensión  **MongoDB for VS Code** .
6. Abre la extensión, selecciona la opción de conexión y proporciona el enlace de conexión de la base de datos, que encontrarás en Atlas. Este enlace se ve como: `mongodb+srv://<nombreusuario>:<password>@cluster0.rxrafm9.mongodb.net/` cambiamos usuario y password.
7. Ejecuta el archivo `db/basedatosBodegas.mongodb` de la siguiente forma : En la parte superior derecha encontramos un comando de un trinagulo que nos indica la opción Mongo Run.
8. Inicia el servidor ejecutando el archivo `app.js` con el comando `npm run dev` en la terminal. Anotar el número de puerto que muestra la terminal.
9. Realiza pruebas utilizando la extensión **Thunder Client** en Visual Studio Code.
10. Primero, obtén un token haciendo una solicitud GET a la URL `http://127.10.10.10:5050/token/<nombreDeLaColeccion>`, donde `<nombreDeLaColeccion>` es el nombre de la colección a la cual se le genera el token, podría ser bodegas o productos.
11. Copia el token generado en la respuesta.
12. En Thunder Client, agrega el token a la sección "Headers" con la clave "Authorization" y el valor del token. Luego, realiza solicitudes a diferentes endpoints utilizando la URL base `http://127.10.10.10:5050`.

## Ejemplos de Endpoints

1. Listar bodegas ordenadas alfabéticamente:
   * URL: `http://127.10.10.10:5050/bodegas`
   * Método: GET
2. Crear una nueva bodega:
   * URL: `http://127.10.10.10:5050/bodegas`
   * Método: POST
   * Cuerpo del mensaje:
     {
     "id": 10,
     "nombre": "Bodega de Diego",
     "id_responsable": 16,
     "estado": 1,
     "created_by": 16,
     "created_at": "2005-06-17"
     }
3. Listar productos en orden descendente por el campo "Total":
   * URL: `http://127.10.10.10:5050/productos`
   * Método: GET
4. Insertar un nuevo producto con cantidad inicial en la tabla de inventarios:
   * URL: `http://127.10.10.10:5050/productos`
   * Método: POST
   * Cuerpo del mensaje: (especificar los detalles del producto)
5. Insertar registros en la tabla de inventarios:
   * URL: `http://127.10.10.10:5050/inventarios`
   * Método: POST
   * Cuerpo del mensaje: (especificar los detalles del registro)

## Notas Adicionales

* El token generado tiene una duración de 30 minutos, y esta duración puede ser modificada en el archivo `limit/token.js` ajustando el valor de `setExpirationTime`.
* La cantidad de solicitudes permitidas en 30 segundos puede ser ajustada en el archivo `limit/config.js` cambiando el valor de `windowMs`.
