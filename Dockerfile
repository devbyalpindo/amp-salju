FROM node:16-alpine3.15 AS deps

WORKDIR /app

COPY . /app

RUN npm install 

RUN npm run build

CMD ["npm", "start"]