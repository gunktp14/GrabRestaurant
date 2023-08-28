import dotenv from 'dotenv'
dotenv.config()

export const HOST = process.env.HOST
export const USER = 'root'
export const PASSWORD = process.env.PASSWORD
export const DB = process.env.DB