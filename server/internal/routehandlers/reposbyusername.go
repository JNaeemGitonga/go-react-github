package routehandlers

import (
	"fmt"
	util "githubapp.tld/server/internal/utilities"

	"io/ioutil"
	"log"
	"net/http"
)

type apiCall func(string) (*http.Response, error)

// ReposByUsername ...
//* here we'll return the users repos by using the user's
//* username
func ReposByUsername(w http.ResponseWriter, r *http.Request, fn apiCall) {
	param, err := util.GetParam(r.URL.Path)
	if err != nil {
		log.Fatal(err)
	}

	resp, err := fn(param)
	fmt.Println(resp)
	if err != nil {
		log.Fatalln(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		log.Fatalln(err)
	}

	fmt.Fprintf(w, string(body))
}
