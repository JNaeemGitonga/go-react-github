package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/", baseRoute).Methods("GET")

	r.HandleFunc("/login", login).Methods("POST")

	r.HandleFunc("/favorites/{userId}", favoritesByUserID).Methods("GET")

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

func favoritesByUserID(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "trynna get favorites")
}

func reposByUserID(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get("https://api.github.com/users/JNaeemGitonga")
	if err != nil {
		log.Fatalln(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)

	if err != nil {
		log.Fatalln(err)
	}

	fmt.Fprintf(w, string(body))
}

func repos(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "trynna get all repos")
}
