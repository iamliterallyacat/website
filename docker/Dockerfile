FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
#COPY website /var/www/website

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
