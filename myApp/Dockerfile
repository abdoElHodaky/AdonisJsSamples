FROM node:6.12.0-alpine
COPY . .
RUN apk add --no-cache tzdata  git sqlite-dev postgresql-dev mysql-dev 
RUN npm install 
ENV PORT 3000
EXPOSE ${PORT}
CMD ["node","ace serve"]
