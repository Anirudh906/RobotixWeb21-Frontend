FROM node:current-alpine as build

WORKDIR /app/frontend
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --silent
COPY ./ ./
RUN npm run build