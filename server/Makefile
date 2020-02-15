  
.PHONY: deps clean build

deps:
	dep ensure

clean: 
	rm -rf .
	
recompile:
	GOOS=linux GOARCH=amd64 go build -o server ./server

supervise:
	supervisor --no-restart-on exit -e go -i bin --exec make -- recompile

start-local:
	docker build -t server . && docker run -p --rm 9900:9900 server

watch:
	make supervise & make start-local

build:
	make deps
	make recompile