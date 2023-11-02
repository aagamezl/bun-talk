package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		data := map[string]interface{}{
			"id":       "81506b73-52e8-4714-b508-ff3734d7b0ce",
			"name":     "John Doe",
			"email":    "john.doe@email.com",
			"age":      32,
			"isActive": true,
		}
		jsonData, err := json.Marshal(data)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		_, _ = w.Write(jsonData)
	})

	listenAddr := fmt.Sprintf(":%s", port)
	err := http.ListenAndServe(listenAddr, nil)
	if err != nil {
		fmt.Printf("Failed to start the server: %s\n", err)
	} else {
		fmt.Printf("Listening on localhost:%s\n", port)
	}
}
