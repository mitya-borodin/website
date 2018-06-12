FROM nginx:1.14.0-alpine

COPY ./dist /usr/share/nginx/html

EXPOSE 80:80
