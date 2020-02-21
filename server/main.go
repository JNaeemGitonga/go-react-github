package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/routehandlers/routehandlerscd" //!this is wrong figuere out how to structure this. the project is broke
	// u "net/url"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/", routehandlers.baseRoute).Methods("GET")

	r.HandleFunc("/api/login", routehandlers.login).Methods("POST")

	r.HandleFunc("/api/favorites/{userId}", rouotehandlers.favoritesByUserID).Methods("GET")

	r.HandleFunc("/api/repos?q={term}", routehandlers.repos).Methods("GET")

	r.HandleFunc("/api/repos/{userId}", rooutehandlers.reposByUserName).Methods("GET")

	fmt.Println("Server listening!")
	http.ListenAndServe(":9901", r)
}
