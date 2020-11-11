# Stage 1
FROM node:alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist /usr/share/nginx/html