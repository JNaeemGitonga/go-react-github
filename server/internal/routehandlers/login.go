package routehandlers

import (
	"fmt"
	"net/http"
)

// Login ...
//* login will be used to login to the app
func Login(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "you trynna login")
}
