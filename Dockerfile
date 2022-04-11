FROM node:12-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY . .
RUN npm install
RUN chown -R app /opt/app
EXPOSE 8080
CMD [ "node", "server.js" ]