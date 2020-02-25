package routehandlers

import (
	"fmt"
	"net/http"
)

func Base(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "damnit boy")
}
