FROM nginx:1.15.5

LABEL maintainer="dmitriy@borodin.site"

COPY ./dist /usr/share/nginx/html
COPY ./build/tmp.nginx.conf /etc/nginx/conf.d/mysite.template
