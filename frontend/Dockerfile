FROM node:latest as angular
WORKDIR /app
COPY package.json .
RUN cd /app && npm install
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/frontend /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

# docker build -t efigueredo-atan/frontend-cadastro-cliente-angular .
# docker run -p 8080:80 efigueredo-atan/frontend-cadastro-cliente-angular