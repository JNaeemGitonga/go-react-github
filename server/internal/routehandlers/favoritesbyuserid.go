package routehandlers

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func FavoritesByUserID(w http.ResponseWriter, r *http.Request) {
	fmt.Println(*r.URL)
	// u.parse(*r.URL) // I left off here trying too get the value from the above pointer
	resp, err := http.Get("https://api.github.com/users/JNaeemGitonga/starred")
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
