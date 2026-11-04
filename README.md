
Este proyecto muestra de forma sencilla cómo utilizar **Redis** desde **Node.js** mediante un ejemplo de una clave dinámica temporal.

La idea es simular un escenario similar al de una aplicación que genera un código temporal para validar una operación.

## ¿Qué hace el ejemplo?

El programa:

- Se conecta a Redis.
- Crea una clave asociada a un usuario.
- Guarda un código temporal.
- Define un tiempo de vida de 60 segundos.
- Consulta el código guardado.
- Consulta el tiempo restante con TTL.
- Compara el código ingresado con el almacenado.
- Si el código es correcto, lo elimina para evitar que vuelva a utilizarse.

## Tecnologías utilizadas

- Node.js
- Redis
- Docker Desktop
- JavaScript
- Visual Studio Code

## Requisitos

Antes de ejecutar el proyecto se necesita:

- Tener Node.js instalado.
- Tener Docker Desktop instalado y funcionando.
- Tener Redis ejecutándose en un contenedor de Docker.

## Crear el contenedor de Redis

Desde PowerShell o la terminal de Visual Studio Code:

```bash
docker run -d --name redis -p 6379:6379 redis
```

Esto crea un contenedor llamado `redis` utilizando el puerto `6379`.

Para comprobar que está funcionando:

```bash
docker ps
```

Si el contenedor ya fue creado anteriormente pero está detenido:

```bash
docker start redis
```

## Preparar el proyecto

Inicializar Node.js:

```bash
npm init -y
```

Instalar el cliente de Redis:

```bash
npm install redis
```

Esto crea archivos y carpetas como:

```text
node_modules/
package.json
package-lock.json
```
````
