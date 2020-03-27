FROM node:12.16
RUN mkdir -p /app
WORKDIR /app/
COPY . /app
RUN npm i

RUN chmod +x /app/start.sh
ENTRYPOINT ["/bin/bash", "/app/start.sh"]