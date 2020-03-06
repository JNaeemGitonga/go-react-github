package utilities

import "strings"

// GetParam ...
//* this will return a param when it is the last
//* param of the url
func GetParam(path string) string {
	slice := strings.Split(path, "/")
	return slice[3]
}
