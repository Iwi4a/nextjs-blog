# Base on offical NGINX Alpine image
FROM nginx:alpine

# Remove any existing config files and copy new one
RUN rm /etc/nginx/conf.d/*

COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/
COPY ./cert/ssl/live/ /etc/nginx/ssl/live/

ARG WEB_URL

ENV WEB_URL=$WEB_URL

# Expose the listening port
EXPOSE 80
EXPOSE 443

# Launch NGINX
# CMD tail -f /dev/null # Use in case of debugging
CMD [ "nginx", "-g", "daemon off;" ]