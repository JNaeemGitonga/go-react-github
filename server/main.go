package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"githubapp.tld/server/internal/githubcalls"
	"githubapp.tld/server/internal/routehandlers" //!this is wrong figuere out how to structure this. the project is broke
	"net/http"
)

const (
	port     = ":9901"
	baseURL  = "/"
	loginURL = "/api/login"
	favURL   = "/api/favorites"
	reposURL = "/api/repos"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc(baseURL, routehandlers.Base).Methods("GET")

	r.HandleFunc(loginURL, routehandlers.Login).Methods("POST")

	r.HandleFunc(favURL+"/{userId}", routehandlers.FavoritesByUserID).Methods("GET")

	r.HandleFunc(reposURL+"?q={term}", routehandlers.Repos(a, y githubcalls)).Methods("GET")

	r.HandleFunc(reposURL+"/{username}", routehandlers.ReposByUsername).Methods("GET")

	fmt.Println("Server listening!")
	http.ListenAndServe(port, r)
}
