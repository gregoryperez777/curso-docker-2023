# Esta es nuestra imagen inicial
# es una imagen base de linux alpine que incluye node
# la cual ya trae una carpeta /app /usr /lib

# --platform indica la arquitectura para la cual se quiere construir la imagen

# podemos colocar de forma explicita
# FROM --platform=arm64 node:19.2-alpine3.16

# tambien podemos pasar esta variable de entorno $BUILDPLATFORM que la proporciona docker automaticamente
# y que cuando se ejecute en la terminal este comando 

# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 \
# -t <username>/<image>:latest --push .

# se lo pasa a --platform del Dockerfile
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

# o bien podemos no especificar --platform en el Dockerfile y solo especificarlo al momento de ejecutar
# el comando por terminal

# docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 \
# -t <username>/<image>:latest --push .

# Nota importante estas ultimas notas hacen referencia si se usa docker buildx build
# si solo construimos la imagen con docker build y no se especifica plataforma, por default construira 
# la imagen para la arquitectura de nuestro equipo
FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# COPY source dest
# source origen desde donde copiar
# dest destino
# aqui como se definio el WORKDIR usamos ./
# sino se hubiera definido usamos /app
COPY package.json ./

# Para ejecutar un comando desde la terminal
# en este caso instala las dependencias
RUN npm install

# copia todo el file sistem 
COPY . .

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios no necesarios en PROD
RUN rm -rf tests && rm -rf node_modules

# Unicamente las dependencias de prod
RUN npm install --prod

# Instruccion para iniciar o ejecutar la aplicacion
# por lo general va de ultimo
# Comando run de la imagen
CMD ["node", "app.js"]