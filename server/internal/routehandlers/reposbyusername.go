package routehandlers

import (
	util "../utilities"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

// ReposByUsername ...
//* here we'll return the users repos by using the user's
//* username
func ReposByUsername(w http.ResponseWriter, r *http.Request) {
	param := util.GetParam(r.URL.Path)
	resp, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", param)) //! The zero value for a slice is nil so here we need to use the 3rd index of this slice
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
