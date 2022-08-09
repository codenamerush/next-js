package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func helloWorld(c *gin.Context) {
	fmt.Println("got this : ", c)
	c.JSON(http.StatusOK, gin.H{
		"message": "hello world1!",
	})
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	router := gin.Default()
	router.Use(CORSMiddleware())
	router.GET("/", helloWorld)

	router.Run("localhost:8080")
}

// http://localhost:8080/greet?name=avinash => {message: "Hello avinash"}; (THis should already be from server)

// http://localhost:8080/greet?name=avinash => {message: "Hello avinash"}; (This should be hit via login)
