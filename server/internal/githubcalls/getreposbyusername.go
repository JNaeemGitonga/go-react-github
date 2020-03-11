package githubcalls

import (
	"fmt"
	"net/http"
)

// GetUsersReposByUsername ...
//* this helper function makes external api calls
//* it was made, along with its siblings to be
//* injected into other functions so that we could test them.
func GetUsersReposByUsername(param string) (*http.Response, error) {
	fmt.Println("working	", param)
	resp, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", param))
	return resp, err
}
