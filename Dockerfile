# Build step
FROM node:alpine

WORKDIR /app/

COPY ./package.json ./yarn.lock /app/
RUN yarn

COPY . /app/
RUN yarn build

# Run step
FROM nginx:alpine

RUN rm -R /etc/nginx/conf.d

COPY ./deploy/nginx.conf /etc/nginx/nginx.template
COPY --from=0 /app/public/ /usr/share/nginx/html

CMD envsubst \$PORT < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx
