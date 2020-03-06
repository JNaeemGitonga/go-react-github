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


## Things I have to remember

1. When setting up my proxy from create react app I needed to use the new method described [here](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually). I needed to NOT use this in conjunction with the old method which was by placing the `"proxy": "localhost:9901"` property in the package json. that wasn't doing anything. Since I am only using one server and will not need to proxy to multiple ones yet I only needed one proxy. You can see that [here](./client/src/setupProxy.js). If I wanted to use others I would continue using that `app.use(...)` pattern observed there.

2. For intercontainer communication I had to remember that if using `docker-compose` my containers will automatically be on the same network. But what I still need the to communicate with each other. In my [setupProxy.js](./client/src/setupProxy.js) if I were to use `http://localhoost:9901` from within the client container it would never reach outward because `localhost` is local to the container (client). In order to make server accessable I need to use the actual name of the container like this: `http://server:9901`. Now I am able to make api calls to this container.

3. If you are coding in Go while using VS Code if you happen to notice your imports disappearing you may want to take a look [here](https://github.com/Microsoft/vscode-go/issues/1266). This github thread will tell you how to change the editor's format tool to `"go.formatTool":"gofmt"`. That solved the problem for me.

4. Internal modules... First I needed break out the logic from my `main.go` file. You want to keep that as lean as possible. I then wanted to go from an "ol'skool" Go app (one that runs because its files are "in" the GOPATH) to using go modules. By doing this I would be able to get away from relative imports with my interal packages *and* also have backward compatability *and* be able to run the app anywhere, as long as I had the `go.mod` file--similar to a Node.js app's package.json (they probably got the idea from them...js).  >

>>One thing that tripped me up with the go modules is that when you init one you must specify the name of it as if it were a public package published on github. I saw this in the documentation everywhere  `example.com/myproject`, that type of syntax but it never registered.  I was trying to just run `$ go mod init server`. The thing about that is that you must make sure that the name that you use isn't already registered. So after some googling "go modules missing dot in first path element". Long story short I ended up at this [issue](https://github.com/golang/go/issues/32819). It mentions the use of `.tld`. It stands for "top level domain". Regardles of what it stands for after changing the first line in my `go.mod` file to [module githubapp.tld/server](./server/go.mod). After that I was able to import my internal packages like this `"githubapp.tld/server/internal/utilities"`