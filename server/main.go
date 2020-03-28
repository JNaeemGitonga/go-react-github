package main

import (
	"context"
	"fmt"
	"github.com/gorilla/mux"
	str "githubapp.tld/server/internal/constants"
	"githubapp.tld/server/internal/githubcalls"
	mw "githubapp.tld/server/internal/middlewares"
	"githubapp.tld/server/internal/routehandlers" //!this is wrong figuere out how to structure this. the project is broke
	util "githubapp.tld/server/internal/utilities"
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
	env               string
	origin            string
)

func init() {
	env := util.GetEnvVar(str.GoEnv)
	fmt.Printf(str.ModeMsg, env)
	if env == str.Development {
		origin = str.Localhost9900
	} else {
		origin = util.GetEnvVar(str.SiteURL)
	}
}

func main() {
	ctx := context.Background()

	r := mux.NewRouter()
	s := r.Headers(str.ContentType, str.AppJSON,
		str.Origin, origin).Subrouter()

	s.Use(mw.Authenticate)

	s.HandleFunc(baseURL, routehandlers.Base).Methods(str.Get)

	s.HandleFunc(loginURL, routehandlers.Login).Methods(str.Post)

	s.HandleFunc(favURL+"/{userId}", routehandlers.FavoritesByUserID).Methods(str.Get)

	s.HandleFunc(reposURL+"?q={term}", routehandlers.Repos).Methods(str.Get)

	s.HandleFunc(reposURL+"/{username}", func(w http.ResponseWriter, r *http.Request) {
		routehandlers.ReposByUsername(ctx, w, r, githubcalls.GetUsersReposByUsername)
	}).Methods(str.Get)

	fmt.Println(str.ServerMsg)
	http.ListenAndServe(port, r)
}
