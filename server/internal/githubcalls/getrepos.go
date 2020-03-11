package githubcalls

import (
	"fmt"
	"net/http"
)

// GetUsersRepos ...
//* this helper function makes external api calls
//* it was made, along with its siblings to be
//* injected into other functions so that we could test them.
func GetUsersRepos(param string) (*http.Response, error) {
	resp, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", param)) //! The zero value for a slice is nil so here we need to use the 3rd index of this slice
	return resp, err
}
