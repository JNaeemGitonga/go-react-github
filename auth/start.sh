#!/bin/bash

NODE_ENV=$(printenv NODE_ENV)
echo "The NOD_ENV is: $NODE_ENV"
echo "installing typescript globally...."
npm i -g typescript
echo "installing ts-node globally..."
npm i -g ts-node

if [ "$NODE_ENV" = "development" ]; then
    npm i typescript --save-dev
    npm run dev
else
    npm run start
fi
