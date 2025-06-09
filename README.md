# Desafío Técnico (Desarrollador Backend - Flexxus)

Este es un desafío técnico para el ingreso como desarrollador backend a Flexxus.

Para poder correr los primeros ejercicios (que serían del primero al cuarto): 

Hay que, en la carpeta root de todo el proyecto...


# Correr localmente
Clonar el proyecto

```bash
  git clone https://github.com/sebastianacunam/flexxus.git
```

Ir a la carpeta del proyecto

```bash
  cd flexxus
```

Installar dependencias

```bash
  npm install
```

## PRIMER EJERCICIO
' Crear un algoritmo que muestre los números impares entre el 0 y el 100. '

```bash
  npm run run:odd
```

## SEGUNDO EJERCICIO
' Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector. '

```bash
  npm run run:workers
```

## TERCER EJERCICIO
' Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18) '

```bash
  npm run run:alumno
```

## CUARTO EJERCICIO
' JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código. 

const x = ["n", "bro", "c", "|"]; 

const y = ["d", "n", "l", "bro", "g"]; '

```bash
  npm run run:filterArray
```

## QUINTO EJERCICIO

Dada la siguiente base de datos relacional: RESUELVA LAS SIGUIENTES CONSULTAS EN SQL:

# IMPORTANTE
### MIRAR IMÁGEN EN EL DOCUMENTO ENVIADO POR CORREO PARA VERIFICAR LA TABLA CON SUS RELACIONES. 

En la carpeta root del proyecto, se encuentra una carpeta "sql" con un archivo "exercises.sql", el cual contiene todas las consultas SQL.

## SEXTO EJERCICIO
' Desarrollo de API con Cumplimiento de Pautas '

# IMPORTANTE
### EN LA CARPETA 'flexxus/api' HAY QUE AGREGAR UN ARCHIVO .env (el mismo será enviado por correo).


Primero accedemos a la carpeta 'api'

```bash
  cd flexxus/api
```

Luego instalamos dependencias,

```bash
  npm install 
```

Y para efectivamente levantar el servidor, 

```bash
  npm run dev
```

Luego, para poder demostrar la funcionalidad de lo solicitado, en postman podemos acceder a las siguientes rutas: 


# API Reference

## Get all articles
```http
  GET /articles/getAllArticles
```

Devuelve una lista completa con todos los artículos que existan en la base de datos.

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | **Opcional**. Nombre de algún artículo |
| `marca`      | `string` | **Opcional**. Marca de algún artículo  |
| `activo`      | `string` | **Opcional**. Estado del artículo |

#### Casos de uso: 

Si se quiere filtrar por nombre, en la ruta se debe agregar lo siguiente:
```http
  GET /articles/getAllArticles?nombre="zapatillas"
```

Si se quiere filtrar por marca, en la ruta se debe agregar lo siguiente:
```http
  GET /articles/getAllArticles?marca="Nike"
```
Nota: En este caso, tiene que ser exactamente igual a como está registrado en la base de datos.

Si se quiere filtrar por estado (activo), en la ruta se debe agregar lo siguiente:
```http
  GET /articles/getAllArticles?activo="true"
  GET /articles/getAllArticles?activo="false"
```


## Create article
```http
  POST /articles/createArticle
```
Crea un artículo con las propiedades esperadas: nombre, marca y activo.

Agregamos un body en la petición, seleccionamos 'raw' y JSON,
```json
{
    "nombre": "Cafetera Espresso",
    "marca": "Oster",
    "activo": "true"
}
```
Para crear un artículo hay que enviarle todas las propiedades. 


## Delete  article
```http
  DELETE /articles/deleteArticle/:objectId
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `objectId`      | `string` | **Requerido**. El id del artículo a desactivar |

No elimina el artículo de la base de datos, solamente le cambia el estado activo de true a false. 

## Update  article
```http
  PATCH /articles/updateArticle/:objectId
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `objectId`      | `string` | **Requerido**. El id del artículo a actualizar |

```json
  {
      "objectData": {
          "activo": "true"
          // "marca": "Lacoste"
      }
  }
```

En el objectData, se pueden agregar uno o más campos a actualizar para un artículo, pero es estrictamente necesario enviarle el objectId por params.
## Authors

- [@sebastianacunam](https://www.github.com/sebastianacunam)

