#!/bin/bash

NODE_ENV=$(printenv NODE_ENV)
echo "The NOD_ENV is: $NODE_ENV"

if [ "$NODE_ENV" = "development" ]; then
    npm start
else
    #* the following is one way to make and serve a production build of the client
    npm run build
    yarn global add serve
    serve -s -l 9900 build
fi
