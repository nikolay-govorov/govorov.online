# Build step
FROM node:alpine

WORKDIR /app/
COPY . /app

RUN npm install --global yarn

RUN yarn
RUN yarn build

# Run step
FROM nginx:alpine

COPY --from=0 /app/public/ /usr/share/nginx/html
