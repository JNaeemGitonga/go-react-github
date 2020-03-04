package routehandlers

import (
	"testing"
)

func TestReposByUsername(t *testing.T) {
	expected := {}
	if got := ReposByUsername(); got != expected {
		t.Errorf(Expected %d. Got %d, expected, got)
	}
}
