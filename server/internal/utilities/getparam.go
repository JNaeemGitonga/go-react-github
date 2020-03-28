package utilities

import (
	"errors"
	"strings"
)

// GetParam ...
//* this will return a param when it is the last
//* param of the url
//! Deprecated:
//! use mux.Vars(r), r = request
func GetParam(path string) (str string, err error) {
	slice := strings.Split(path, "/")
	if length := len(slice); length != 4 {
		return "", errors.New("could not parse url")
	}
	return slice[3], nil
}
