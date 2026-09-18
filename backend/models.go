package main

//接收前端数据
type AuthRequest struct{
	Username string `json:"username" binding:"requred`
	Password string `json:"password" binding:"requred`
}

type Response struct{
	Code int `json:"code"`
	Msg string `json:"msg"`
}