# BUILD DOCKER IMAGE:

FROM node:10.16
RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json /opt/app
RUN npm i -g typescript
RUN npm i -g ts-node

RUN npm i
COPY . /opt/app

ENTRYPOINT [ "npm" ]
CMD [ "start" ]
