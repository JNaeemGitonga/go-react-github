#!/bin/bash

NODE_ENV=$(printenv NODE_ENV)
echo "The NODE_ENV is: $NODE_ENV"

if [ "$NODE_ENV" = "development" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
else
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
fi
