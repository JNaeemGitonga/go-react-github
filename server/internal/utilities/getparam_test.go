package utilities

import (
	"testing"
)

func TestGetParam(t *testing.T) {
	expected := "me"
	got, err := GetParam("/api/repos/me")
	if err != nil {
		t.Errorf("There was an error: %v", err)
	}

	expected = "test"
	secondTestResult, _ := GetParam("/api/repos/test")
	if secondTestResult != expected {
		t.Errorf("Expected %v. Got %v", expected, got)
	}

}
