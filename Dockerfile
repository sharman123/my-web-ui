# Stage 1
FROM node:alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json /app/
RUN cd /app && npm set progress=false && npm install
COPY . /app
RUN cd /app && npm run build

# Stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist /usr/share/nginx/html
