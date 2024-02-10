FROM node:16-alpine3.16
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata  git sqlite-dev postgresql-dev mysql-dev 
RUN chmod +x ./MyApp/run.sh && npm install 
ENV PORT 3000
EXPOSE ${PORT}
CMD ["./myApp/run.sh"]
