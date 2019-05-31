FROM node:8

# Criando a pasta
RUN mkdir -p /usr/src/app

# Setando o workddir
WORKDIR /usr/src/app

# Instalando dependencias
COPY package*.json ./

RUN npm install

# Bundle app source
#COPY . .

COPY --chown=node:node . .

RUN chmod -R 777 ./db

USER node

EXPOSE 3000

CMD [ "npm", "start" ]
