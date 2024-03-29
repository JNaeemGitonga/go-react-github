# Go/React/Github   <img src="https://travis-ci.org/JNaeemGitonga/go-react-github.png?branch=master" />

## Description
This is a small distributed system built for users to access their own github accounts, save repos to a favorites list and update their list as needed.

I wanted to use microservices. My front-end is a dockerized react app. My data server is writtenn in Go. My auth service is written in Node

To start this app locally:

1. You will need to install Docker and Docker Compose.

2. Clone this repo

3. In your terminal run the following command: `$ sh run.sh dev` (for a production build omit `dev`).

4. In your favorite browser visit: `$ http://localhost:9900`


## Things I have to remember

1. When setting up my proxy from create react app I needed to use the new method described [here](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually). I needed to NOT use this in conjunction with the old method which was by placing the `"proxy": "localhost:9901"` property in the package json. that wasn't doing anything. Since I am only using one server and will not need to proxy to multiple ones yet I only needed one proxy. You can see that [here](./client/src/setupProxy.js). If I wanted to use others I would continue using that `app.use(...)` pattern observed there.

2. For intercontainer communication I had to remember that if using `docker-compose` my containers will automatically be on the same network. But what I still need the to communicate with each other. In my [setupProxy.js](./client/src/setupProxy.js) if I were to use `http://localhoost:9901` from within the client container it would never reach outward because `localhost` is local to the container (client). In order to make server accessable I need to use the actual name of the container like this: `http://server:9901`. Now I am able to make api calls to this container.

3. If you are coding in Go while using VS Code if you happen to notice your imports disappearing you may want to take a look [here](https://github.com/Microsoft/vscode-go/issues/1266). This github thread will tell you how to change the editor's format tool to `"go.formatTool":"gofmt"`. That solved the problem for me.

4. Internal modules... First I needed break out the logic from my `main.go` file. You want to keep that as lean as possible. I then wanted to go from an "ol'skool" Go app (one that runs because its files are "in" the GOPATH) to using go modules. By doing this I would be able to get away from relative imports with my interal packages *and* also have backward compatability *and* be able to run the app anywhere, as long as I had the `go.mod` file--similar to a Node.js app's package.json (they probably got the idea from them...js). One thing that tripped me up with the go modules is that when you init one you must specify the name of it as if it were a public package published on github. I saw this in the documentation everywhere  `example.com/myproject`, that type of syntax but it never registered.  I was trying to just run `$ go mod init server`. The thing about that is that you must make sure that the name that you use isn't already registered. So after some googling "go modules missing dot in first path element". Long story short I ended up at this [issue](https://github.com/golang/go/issues/32819). It mentions the use of `.tld`. It stands for "top level domain". Regardles of what it stands for after changing the first line in my `go.mod` file to [module githubapp.tld/server](./server/go.mod). After that I was able to import my internal packages like this `"githubapp.tld/server/internal/utilities"`.

5. How I got my test working... Well, I was having some issues with a `panic: runtime error: index out of range [3] with length 3 ` error. I was trying to access an index that didn't exists. 

6. With Go Modules all you need to do is start your app. No need to do a `go get github.com/some-package`.

7. While working with TravisCI I noticed I was having trouble with my build.  I had renamed a file a week or so back and was unaware that github had not registered the change. In the github cache the file name remained the same. In order to fix that I needed to run `git rm --cache client/src/components/Login/login.utilities.js`. That command would remove the old filename and I could then use the new one.  After that I no longer received the following error. <br/>
![Screen Shot 2020-03-22 at 11 02 45 AM](https://user-images.githubusercontent.com/26694930/77252875-2ba84e80-6c2d-11ea-88e1-d15c616ae363.png)

8. You do not need the context providers and consumers to use the context api as I demonstrated back in Jan 2019. Set the `.contextType` for the component.