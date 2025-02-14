FROM node:18-alpine

WORKDIR /app

COPY ./package.json /app/

COPY ./index.js /app/

ADD ./example.tar /app/

RUN npm install

EXPOSE 3000

CMD node index.js