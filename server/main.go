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

	r.HandleFunc("/api/login", login).Methods("POST")

	r.HandleFunc("/api/favorites/{userId}", favoritesByUserID).Methods("GET")

	r.HandleFunc("/api/repos?q={term}", repos).Methods("GET")

	r.HandleFunc("/api/repos/{userId}", reposByUserID).Methods("GET")

	fmt.Println("Server listening!")
	http.ListenAndServe(":9901", r)
}

func baseRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "damnit boy")
}

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "you trynna login")
}

func favoritesByUserID(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get("https://api.github.com/users/JNaeemGitonga/starred")
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

func reposByUserID(w http.ResponseWriter, r *http.Request) {
	resp, err := http.Get("https://api.github.com/users/JNaeemGitonga/repos")
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
