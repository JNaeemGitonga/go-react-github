package routehandlers

import (
	"context"
	"fmt"
	"github.com/gorilla/mux"
	str "githubapp.tld/server/internal/constants"
	"io/ioutil"
	"log"
	"net/http"
)

type apiCall func(context.Context, string) (*http.Response, error)

// ReposByUsername ...
//* here we'll return the users repos by using the user's
//* username
func ReposByUsername(ctx context.Context, w http.ResponseWriter, r *http.Request, api apiCall) {
	vars := mux.Vars(r)

	resp, err := api(ctx, vars[str.Username]) //! you left off here and on line 17 with a sync.Mutex issue
	if err != nil {
		log.Fatalln(err)
	}
	// repos, err := util.MarshalJSONAndSend(resp)

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		log.Fatalln(err)
	}

	fmt.Fprintf(w, string(body))
}
