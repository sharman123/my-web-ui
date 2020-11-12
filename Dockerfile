# Stage 1
FROM node:alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build -- --output-path=./dist/out --configuration
# Stage 2
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
#RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist/out/ /usr/share/nginx/html

#RUN cd /usr/share/nginx/html
#RUN chown nginx:nginx /usr/share/nginx/html/*
#RUN chmod 755 /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
#COPY nginx.conf /etc/nginx//conf.d/default.conf
