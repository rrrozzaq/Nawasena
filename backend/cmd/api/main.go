package main

import (
	"log"

	"nawasena/backend/internal/config"
	"nawasena/backend/internal/server"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("failed to load config: %v", err)
	}

	srv, err := server.New(cfg)
	if err != nil {
		log.Fatalf("server init failed: %v", err)
	}

	if err := srv.Run(); err != nil {
		log.Fatalf("server error: %v", err)
	}
}
