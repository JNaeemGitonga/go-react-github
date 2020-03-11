package main

import (
	"context"
	"fmt"
	"github.com/google/go-github/v29/github"
	"github.com/gorilla/mux"
	"githubapp.tld/server/internal/githubcalls"
	"githubapp.tld/server/internal/routehandlers" //!this is wrong figuere out how to structure this. the project is broke
	utils "githubapp.tld/server/internal/utilities"
	"golang.org/x/oauth2"
	"net/http"
)

const (
	port     = ":9901"
	baseURL  = "/"
	loginURL = "/api/login"
	favURL   = "/api/favorites"
	reposURL = "/api/repos"
)

var (
	githubAccessToken string
)

func main() {
	ctx := context.Background()
	githubAccessToken = utils.GetEnvVar("GITHUB__ACCESS__TOKEN")
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: githubAccessToken},
	)
	tc := oauth2.NewClient(ctx, ts)

	client := github.NewClient(tc)
	r := mux.NewRouter()

	r.HandleFunc(baseURL, routehandlers.Base).Methods("GET")

	r.HandleFunc(loginURL, routehandlers.Login).Methods("POST")

	r.HandleFunc(favURL+"/{userId}", routehandlers.FavoritesByUserID).Methods("GET")

	r.HandleFunc(reposURL+"?q={term}", routehandlers.Repos).Methods("GET")

	r.HandleFunc(reposURL+"/{username}", func(w http.ResponseWriter, r *http.Request) {
		routehandlers.ReposByUsername(ctx, w, r, &client, githubcalls.GetUsersReposByUsername)
	}).Methods("GET")

	fmt.Println("Server listening!")
	http.ListenAndServe(port, r)
}
