FROM node:10.15.3
FROM keymetrics/pm2:latest-wheezy

ARG SERVER_PORT=7002

WORKDIR /usr/src/app

COPY . .

RUN npm install --unsafe-perm

EXPOSE ${SERVER_PORT}

CMD [ "node","start" ]
