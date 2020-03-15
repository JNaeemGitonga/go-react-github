# BUILD DOCKER IMAGE:

FROM node:12.16
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

RUN npm i
COPY . /app
RUN ls
RUN chmod +x /app/start.sh
ENTRYPOINT ["/bin/bash", "/app/start.sh"]
