FROM node:14

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./src ./src
COPY ./tsconfig.json .
COPY ./package.json .
COPY ./yarn.lock .
COPY ./docker/entrypoint.sh .
COPY ./docker/init-mongo.sh .
COPY ./docker/dockerignore.sh .
COPY ./docker/docker-compose.yml .

RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn

ENV SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN yarn install

RUN rm -rf /usr/local/lib/node_modules/npm/ /usr/local/bin/npm

CMD ["./entrypoint.sh"]
