FROM node:16-alpine3.16
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata  git sqlite-dev postgresql-dev mysql-dev 
RUN npm install 
RUN node ace migrate
RUN node ace db:seed
ENV PORT 3000
EXPOSE ${PORT}
