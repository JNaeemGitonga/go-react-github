package routehandlers

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

func ReposByUserName(w http.ResponseWriter, r *http.Request) {
	x := strings.Split(r.URL.Path, "/")
	resp, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", x[3])) //! The zero value for a slice is nil so here we need to use the 3rd index of this slice
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
