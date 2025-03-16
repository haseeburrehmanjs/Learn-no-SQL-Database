import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.DB_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('express app run on port 3000')
    })
})