package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Static("/js", "assets/js/")
	router.LoadHTMLGlob("assets/*.html")
	router.GET("/", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index.html", gin.H{})
	})

	router.POST("/post", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "postできたよ!",
		})
	})
	router.Run(":8080")
}
