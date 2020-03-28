package githubcalls

import (
	"context"
	"fmt"
	str "githubapp.tld/server/internal/constants"
	"net/http"
)

// GetUsersReposByUsername ...
//* this helper function makes external api calls
//* it was made, along with its siblings to be
//* injected into other functions so that we could test them.
func GetUsersReposByUsername(_ context.Context, param string) (*http.Response, error) {

	resp, err := http.Get(fmt.Sprintf(str.GithubUserRepoTemplate, param))

	return resp, err
}
