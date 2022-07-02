FROM nginx:stable-alpine
LABEL maintainer="Dylan Simowitz <git@dylan.simowitz.com>"
COPY  dist/apps/frontend/* /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
