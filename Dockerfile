FROM node:9.11.2-alpine

COPY . /app/
WORKDIR /app/website

RUN set -ex; \
    yarn install --frozen-lockfile; \
    yarn run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=0 /app/website/build/elkarbackup-docs /usr/share/nginx/html

EXPOSE 80
