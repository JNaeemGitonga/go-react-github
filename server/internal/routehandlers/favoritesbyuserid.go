package routehandlers

import (
	util "../utilities"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

// FavoritesByUserID ...
//* this will give you your favorite user repos base on you
//* userID (will probably be changed to name since github uses usernames...)
func FavoritesByUserID(w http.ResponseWriter, r *http.Request) {
	param := util.GetParam(r.URL.Path)
	resp, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/starred", param))
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
