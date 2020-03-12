package githubcalls

import (
	"context"
	"fmt"
	"github.com/google/go-github/v29/github"
	"net/http"
)

// GetUsersReposByUsername ...
//* this helper function makes external api calls
//* it was made, along with its siblings to be
//* injected into other functions so that we could test them.
func GetUsersReposByUsername(ctx context.Context, param string, gc *github.Client) (*http.Response, error) {
	fmt.Println(ctx)
	fmt.Println(gc)
	resp, err := http.Get(fmt.Sprintf("https://api.github.com/users/%s/repos", param))
	// repos, _, err := *gc.Repositories.List(ctx, param, nil)
	return resp, err
}
