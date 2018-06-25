FROM node:9.11.2-alpine

COPY . /usr/src/app/
WORKDIR /usr/src/app/website

RUN set -ex; \
    yarn install --frozen-lockfile; \
    yarn run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=0 /usr/src/app/website/build/docs /usr/share/nginx/html

EXPOSE 80
