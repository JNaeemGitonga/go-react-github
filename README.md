# Go/React/Github

## Description
This is a small app that will continue to be built out.

Currently, it will allow a user to login via github and look at his
or her's repos and favorited repos.  It will also allow users to search for other repos by using keywords and add them to their favorites.

To start this app:

1. You will need to install Docker and Docker Compose.

2. Clone this repo

3. In your terminal run the following command: `$ docker-compose build && docker-compose run --rm` 

4. In your favorite browser visit: `$ http://localhost:9900`


## Things I had to remember

1. When setting up my proxy from create react app I needed to use the new method described [here](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually). I needed to NOT use this in conjunction with the old method which was by placing the `"proxy": "localhost:9901"` property in the package json. that wasn't doing anything. Since I am only using one server and will not need to proxy to multiple ones yet I only needed one proxy. You can see that [here](./client/src/setupProxy.js). If I wanted to use others I would continue using that `app.use(...)` pattern observed there.