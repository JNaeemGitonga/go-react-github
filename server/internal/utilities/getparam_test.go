package utilities

import (
	"testing"
)

func TestGetParam(t *testing.T) {
	//* Table-driven tests using a slice of test cases
	testCases := []struct {
		param    string
		expected string
	}{
		{"/api/repos/jaha", "jaha"},
		{"api/repos//me", ""},
	}

	for _, tc := range testCases {
		if got, err := GetParam(tc.param); got == tc.expected && err != nil {
			t.Errorf("Expected %v. Got %v", tc.expected, got)
		}
	}
}
