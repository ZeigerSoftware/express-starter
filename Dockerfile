FROM node:16.18.1-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install --silent

COPY . .

CMD npm start
