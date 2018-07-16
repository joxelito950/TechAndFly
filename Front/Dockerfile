FROM node:7.10 AS BUILD_IMAGE
WORKDIR /home/app
COPY package.json package-lock.json ./
COPY . ./
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=BUILD_IMAGE /home/app/public /usr/share/nginx/html
EXPOSE 80

RUN mkdir -p /opt/presentation/external
VOLUME /opt/presentation/external

CMD ["nginx", "-g", "daemon off;"]