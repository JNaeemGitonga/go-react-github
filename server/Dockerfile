FROM golang:latest 
RUN mkdir /app 
COPY . /app
WORKDIR /app 
RUN go get github.com/gorilla/mux
RUN go get github.com/githubnemo/CompileDaemon
RUN go build -o main . 
CMD ['/app/main']
ENTRYPOINT CompileDaemon --build="go build main.go" --command=./main

# docker build -t server . && docker run --rm -v ~/projects/warner-media/server:/app -p 9900:9900 server