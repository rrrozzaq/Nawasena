package handlers

import (
	"net/http"

	"nawasena/backend/internal/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type JobHandler struct {
	db *gorm.DB
}

func NewJobHandler(db *gorm.DB) *JobHandler {
	return &JobHandler{db: db}
}

func (h *JobHandler) ListJobs(c *gin.Context) {
	var jobs []models.Job
	if err := h.db.Find(&jobs).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "failed to load jobs"})
		return
	}

	c.JSON(http.StatusOK, jobs)
}

func (h *JobHandler) CreateJob(c *gin.Context) {
	var input models.Job
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.db.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "unable to create job"})
		return
	}

	c.JSON(http.StatusCreated, input)
}
