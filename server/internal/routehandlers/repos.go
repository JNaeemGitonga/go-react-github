package routehandlers

import (
	"fmt"
	"net/http"
)

// Repos ...
//* Repos will be used to get the all user's repos
//* we should probably use some pagination here...
func Repos(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "trynna get all repos")
}
