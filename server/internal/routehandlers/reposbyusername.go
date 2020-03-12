package routehandlers

import (
	"context"
	"fmt"
	"github.com/google/go-github/v29/github"
	"githubapp.tld/server/internal/githubcalls"
	util "githubapp.tld/server/internal/utilities"
	"io/ioutil"
	"log"
	"net/http"
)

type apiCall func(context.Context, string, github.Client) (*http.Response, error)

// ReposByUsername ...
//* here we'll return the users repos by using the user's
//* username
func ReposByUsername(ctx context.Context, w http.ResponseWriter, r *http.Request, c *github.Client) {
	param, err := util.GetParam(r.URL.Path)
	if err != nil {
		log.Fatal(err)
	}
	resp, err := githubcalls.GetUsersReposByUsername(ctx, param, c) //! you left off here and on line 17 with a sync.Mutex issue
	if err != nil {
		log.Fatalln(err)
	}
	// repos, err := util.MarshalJSONAndSend(resp)
	fmt.Println(resp)

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		log.Fatalln(err)
	}

	fmt.Fprintf(w, string(body))
}
