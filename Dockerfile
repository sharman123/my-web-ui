# Stage 1
FROM node:alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN cd /app && npm set progress=false && npm install
COPY . /app
RUN cd /app && npm run build

# Stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/dist 

#RUN cd /usr/share/nginx/html
RUN chown nginx:nginx /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*
