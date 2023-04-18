# syntax=docker/dockerfile:1
FROM node:18-alpine as builder
WORKDIR /home/node/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.24-alpine
COPY --from=builder /home/node/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf