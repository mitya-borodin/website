FROM node:16.20.2-alpine AS builder

LABEL maintainer="dmitriy@borodin.site"

WORKDIR '/tmp'

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci

COPY ./ ./

RUN npm run build

FROM nginx:alpine

COPY --from=builder /tmp/build /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
