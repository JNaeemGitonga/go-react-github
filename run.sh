#!/bin/bash

NODE_ENV=$1
echo "The NODE_ENV is: $NODE_ENV"

echo "removing auth/lib..."
rm -rf auth/lib

if [ "$NODE_ENV" = "dev" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
    #* the above `docker-compose` command will read from two `.yml` files to gather the info needed to start this container
else
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
fi
