import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { loginModel } from './models/login.model.js'

const app = express()
dotenv.config()

app.use(express.json())

app.post('/login', (req, res) => {
    // res.status(200).json({
    //     status: '200',
    //     message : 'here is some login data',
    //     bodyData: req.body
    // })

    const sendLoginData = new loginModel({
        name: req.body.name,
        email: req.body.email
    })
    sendLoginData.save().then(() => {
        res.send({
            status: '200', 
            message: 'login user succesfuly'
        })
    }).catch((error) => {
        res.send({
            status: "404",
            message : error
        })
    })
})

app.get('/get-login-list', async (req, res) => {
    const loginDataList = await loginModel.find()
    res.send({
        status: '200',
        message : loginDataList
    })
})

mongoose.connect(process.env.DB_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('express app run on port 3000')
    })
})