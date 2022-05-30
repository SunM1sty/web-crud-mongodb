FROM node:latest as builder

WORKDIR /app/client

COPY package*.json ./

COPY server.js ./
COPY config.env ./
COPY views/ ./views/
COPY server/ ./server/
COPY assets/ ./assets/


RUN npm install
