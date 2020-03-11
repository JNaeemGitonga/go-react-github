package utilities

import (
	"encoding/json"
	"github.com/google/go-github/v29/github"
)

// MarshalJSONAndSend ...
//* function will marshal json and stringify it
func MarshalJSONAndSend(repos []*github.Repository) (string, error) {
	response, err := json.Marshal(repos)
	return string(response), err
}
