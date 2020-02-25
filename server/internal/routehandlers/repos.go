package routehandlers

import (
	"fmt"
	"net/http"
)

func Repos(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "trynna get all repos")
}
