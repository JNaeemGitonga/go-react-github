package utilities

import (
	"testing"
)

func TestGetParam(t *testing.T) {
	expected := "jnaeemgitonga"
	if got := GetParam("api/repos/jnaeemgitonga"); got != expected {
		t.Error("Expected %v. Got %v", expected, got)
	}
}
