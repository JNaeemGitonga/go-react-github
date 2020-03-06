package utilities

import (
	"testing"
)

func TestGetParam(t *testing.T) {
	expected := "me"
	if got := GetParam("/api/repos/me"); got != expected {
		t.Errorf("Expected %v. Got %v", expected, got)
	}
}
