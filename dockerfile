FROM node:alpine


WORKDIR /NodePostgresJest

COPY . .

RUN npm install


CMD [ "npm","start-dev" ]