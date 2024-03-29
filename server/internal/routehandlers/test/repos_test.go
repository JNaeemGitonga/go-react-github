package routehandlers

import (
	r "githubapp.tld/server/internal/routehandlers"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestRepos(t *testing.T) {
	req, err := http.NewRequest("GET", "/api/repos?q=test", nil)
	if err != nil {
		t.Fatal(err)
	}

	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(r.Repos)
	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got '%v' want '%v'",
			status, http.StatusOK)
	}

	expected := "trynna get all repos"
	if rr.Body.String() != expected {
		t.Errorf("handler returned unexpected body: got '%v' want '%v'",
			rr.Body.String(), expected)
	}
}
