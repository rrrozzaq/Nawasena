package server

import (
	"fmt"

	"nawasena/backend/internal/config"
	"nawasena/backend/internal/handlers"
	"nawasena/backend/internal/models"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Server struct {
	router *gin.Engine
	cfg    *config.Config
	db     *gorm.DB
}

func New(cfg *config.Config) (*Server, error) {
	db, err := gorm.Open(postgres.Open(cfg.DatabaseURL), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	if err := db.AutoMigrate(&models.User{}, &models.Job{}, &models.Application{}); err != nil {
		return nil, err
	}

	srv := &Server{
		router: gin.Default(),
		cfg:    cfg,
		db:     db,
	}
	srv.routes()

	return srv, nil
}

func (s *Server) routes() {
	s := s.router

	s.GET("/healthz", handlers.Health)

	auth := handlers.NewAuthHandler(s.db, s.cfg)
	user := handlers.NewUserHandler(s.db)
	job := handlers.NewJobHandler(s.db)

	api := s.router.Group("/api")
	{
		api.POST("/auth/register", auth.Register)
		api.POST("/auth/login", auth.Login)
		api.GET("/users/me", user.Me)
		api.GET("/jobs", job.ListJobs)
		api.POST("/jobs", job.CreateJob)
	}
}

func (s *Server) Run() error {
	return s.router.Run(fmt.Sprintf(":%s", s.cfg.Port))
}
