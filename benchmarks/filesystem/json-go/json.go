package main

import (
	"strconv"
	"time"
)

func main() {
	obj := map[string]interface{}{
		"id":       "81506b73-52e8-4714-b508-ff3734d7b0ce",
		"name":     "John Doe",
		"email":    "john.doe@email.com",
		"age":      32,
		"isActive": true,
	}

	fns := []func(int) interface{}{
		func(n int) interface{} { return n%2 == 0 },        // boolean
		func(n int) interface{} { return n },               // number
		func(n int) interface{} { return strconv.Itoa(n) }, // string
		func(n int) interface{} { return obj },             // nested object
		// func(n int) interface{} {
		// 	data, _ := json.Marshal(obj) // nested object
		// 	var result map[string]interface{}
		// 	_ = json.Unmarshal(data, &result)
		// 	return result
		// },
	}

	for i := 0; i < 70; i++ {
		obj["key"+strconv.Itoa(i)] = fns[i%len(fns)](int(time.Now().Unix()))
	}
}
