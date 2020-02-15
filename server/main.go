package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/", baseRoute).Methods("GET")

	r.HandleFunc("/login", login).Methods("POST")

	r.HandleFunc("/favorites/{userId}", favorites).Methods("GET")

	r.HandleFunc("/repos?q={term}", repos).Methods("GET")

	r.HandleFunc("/repos/{userId}", reposByUserID).Methods("GET")

	fmt.Println("Server listening!")
	http.ListenAndServe(":9901", r)
}

func baseRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "damn it boy")
}

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "you trynna login")
}

func favorites(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "we'll find you someting")
}

func reposByUserID(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "we'll find you something")
}

func repos(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "we'll find you something")
}
