package models

import "gorm.io/gorm"

type Application struct {
	gorm.Model
	UserID uint   `json:"userId"`
	JobID  uint   `json:"jobId"`
	Status string `json:"status" gorm:"not null;default:'pending'"`
}
