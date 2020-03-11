package githubcalls

import (
	"fmt"
	"github.com/google/go-github/v29/github"
	"net/http"
)

// GetUsersReposByUsername ...
//* this helper function makes external api calls
//* it was made, along with its siblings to be
//* injected into other functions so that we could test them.
func GetUsersReposByUsername(param string, gc *github.Client) (*http.Response, error) {
	fmt.Println("working	", param)
	repos, _, err := *gc.Repositories.List(ctx, "", nil)
	resp, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", param))
	return resp, err
}
