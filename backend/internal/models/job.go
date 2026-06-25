package models

import "gorm.io/gorm"

type Job struct {
	gorm.Model
	Title       string `json:"title" gorm:"not null"`
	Company     string `json:"company" gorm:"not null"`
	Location    string `json:"location"`
	Description string `json:"description" gorm:"type:text"`
	RecruiterID uint   `json:"recruiterId"`
}
