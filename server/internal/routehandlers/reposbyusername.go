package routehandlers

import (
	"context"
	"fmt"
	"github.com/google/go-github/v29/github"
	util "githubapp.tld/server/internal/utilities"
	"log"
	"net/http"
)

type apiCall func(context.Context, string, github.Client) ([]*github.Repository, error)

// ReposByUsername ...
//* here we'll return the users repos by using the user's
//* username
func ReposByUsername(ctx context.Context, w http.ResponseWriter, r *http.Request, c *github.Client, fn apiCall) {
	param, err := util.GetParam(r.URL.Path)
	if err != nil {
		log.Fatal(err)
	}

	resp, err := fn(ctx, param, *c) //! you left off here and on line 17 with a sync.Mutex issue
	if err != nil {
		log.Fatalln(err)
	}
	repos, err := util.MarshalJSONAndSend(resp)
	fmt.Println(resp)

	// defer resp.Body.Close()

	// body, err := ioutil.ReadAll(resp.Body)

	// if err != nil {
	// 	log.Fatalln(err)
	// }

	fmt.Fprintf(w, repos)
}
