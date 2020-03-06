package main

import (
	"fmt"
	"githubapp.tld/server/internal/routehandlers" //!this is wrong figuere out how to structure this. the project is broke
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/", routehandlers.Base).Methods("GET")

	r.HandleFunc("/api/login", routehandlers.Login).Methods("POST")

	r.HandleFunc("/api/favorites/{userId}", routehandlers.FavoritesByUserID).Methods("GET")

	r.HandleFunc("/api/repos?q={term}", routehandlers.Repos).Methods("GET")

	r.HandleFunc("/api/repos/{username}", routehandlers.ReposByUsername).Methods("GET")

	fmt.Println("Server listening!")
	http.ListenAndServe(":9901", r)
}
