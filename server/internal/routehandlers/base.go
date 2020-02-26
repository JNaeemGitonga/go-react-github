package routehandlers

import (
	"fmt"
	"net/http"
)

// Base ...
//* this is the base route doesn't do much yet
//*  it may be deprecated soon...idk
func Base(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "damnit boy")
}
