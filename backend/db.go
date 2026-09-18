package main

import{
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
}

var DB *sql.DB

func InitDB() error {
	var err error
	DB, err = sql.Open("sqlite3","./user.db")
}

