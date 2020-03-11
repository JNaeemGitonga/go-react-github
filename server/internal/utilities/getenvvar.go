package utilities

import (
	"github.com/joho/godotenv"
	"log"
	"os"
)

// GetEnvVar ...
//* grabs env variables for you
func GetEnvVar(varName string) string {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	return os.Getenv(varName)
}
