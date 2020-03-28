package utilities

import (
	"github.com/joho/godotenv"
	str "githubapp.tld/server/internal/constants"
	"log"
	"os"
)

// GetEnvVar ...
//* grabs env variables for you
func GetEnvVar(varName string) string {
	err := godotenv.Load()
	if err != nil {
		log.Fatal(str.EnvLoadErr)
	}
	return os.Getenv(varName)
}
