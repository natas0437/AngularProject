ARG NGINX_VERSION=mainline
FROM nginx:$NGINX_VERSION
ARG BUILD_FOLDER=dist

ENV APPLICATION_PORT=80
ENV NGINX_ROOT_DOCUMENT=/var/www/html

WORKDIR $NGINX_ROOT_DOCUMENT

LABEL MAINTAINER="Dimas Maryanto <software.dimas_m@icloud.com>"
LABEL org.framework.name="angular.io"

COPY $BUILD_FOLDER $NGINX_ROOT_DOCUMENT
COPY .nginx/nginx.template.conf /etc/nginx/templates/default.conf.template

EXPOSE ${APPLICATION_PORT}/tcp
