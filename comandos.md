
- En el aula laburan con terminal cmd por problemas de permisos

# Comandos
## node --version
arroja la version de node.js instalado

## npm -v 
arroja la version del gestor de paquetes de node

## pnpm / pnpm -v
instalamos pnpm mediante npn por temas de segurida. Ambos son gestores de paquetes

https://pnpm.io/ --> web de pnpm

#### usar pn en vez de pnpm en consola, es lo mismo pero mas corto

### Inicializar proyecto
* pn init (se debe estar en la carpeta del proyecto)
Una vez que ya esta el archivo package.json creado no hace falta inicializarlo de nuevo

### Configurar scriptsc

{
  "name": "clase8",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" --> aca se cambia a "dev":"five-server" para descargar/instalar  five server
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devEngines": {
    "packageManager": {
      "name": "pnpm",
      "version": "12.3.4",
      "onFail": "download"
    }
  },
  "packageManager": "pnpm@12.3.4",
  "type": "module"
}

### Instalar paquetes
pn add nombre-paquete

Con esto y la configuracion del package ya instalamos five-server. Ahora en vez de hacer click derecho open with five server, se escribe en la terminal y directamente con el comando "pn dev" corre five server que levanta el servidor y poder usar el protolo http

Con el gitignore se pone el package.json para que no se suba al github 

