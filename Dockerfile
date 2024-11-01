ARG VERSION=latest

FROM node:${VERSION} as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 81

CMD ["nginx", "-g", "daemon off;"]
