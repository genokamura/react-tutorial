FROM node:14-alpine3.12 AS build
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:1.20.2
COPY --from=build /usr/src/app/build /usr/share/nginx/html
