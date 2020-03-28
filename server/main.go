package main

import (
	"context"
	"fmt"
	"github.com/gorilla/mux"
	str "githubapp.tld/server/internal/constants"
	"githubapp.tld/server/internal/githubcalls"
	"githubapp.tld/server/internal/routehandlers" //!this is wrong figuere out how to structure this. the project is broke
	_ "gopkg.in/square/go-jose.v2"
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

	r := mux.NewRouter()
	r.Use()

	r.HandleFunc(baseURL, routehandlers.Base).Methods(str.Get)

	r.HandleFunc(loginURL, routehandlers.Login).Methods(str.Post)

	r.HandleFunc(favURL+"/{userId}", routehandlers.FavoritesByUserID).Methods(str.Get)

	r.HandleFunc(reposURL+"?q={term}", routehandlers.Repos).Methods(str.Get)

	r.HandleFunc(reposURL+"/{username}", func(w http.ResponseWriter, r *http.Request) {
		routehandlers.ReposByUsername(ctx, w, r, githubcalls.GetUsersReposByUsername)
	}).Methods(str.Get)

	fmt.Println(str.ServerMsg)
	http.ListenAndServe(port, r)
}
