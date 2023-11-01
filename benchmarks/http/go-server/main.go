package main

import (
  "encoding/json"
  "fmt"
  "net/http"
)

type response struct {
  Hello string `json:"hello"`
}

func HelloWorldHandler(w http.ResponseWriter, r *http.Request) {
  msg := response{
    Hello: "World!",
  }

  jsonResponse, err := json.Marshal(msg)
  if err != nil {
    http.Error(w, "Error creating JSON response", http.StatusInternalServerError)
    return
  }

  w.Header().Set("Content-Type", "application/json")
  w.Write(jsonResponse)
}

func main() {

  http.HandleFunc("/", HelloWorldHandler)

  fmt.Println("Server is listening on port 3000...")
  err := http.ListenAndServe(":3000", nil)
  if err != nil {
    fmt.Println("Error starting server:", err)
  }
}
