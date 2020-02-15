FROM node:12.16
RUN mkdir -p /app
WORKDIR /app/
COPY . /app
RUN npm i
ENTRYPOINT [ "npm" ]
CMD ["start"]