import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { enquiryModel } from './modules/enquiry.model.js'
dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        status : 200, 
        message : 'express app runing'
    })
})

app.post('/api/enquiry-insert', (req, res) => {
    const {name, email, phone, message} = req.body
    const enquiryDta = new enquiryModel({
        name:name,
        email: email,
        phone: phone,
        message: message, 
    })
    enquiryDta.save().then(() => {
        res.status(200).json({
            message: 'data add succesfully'
        })
    }).catch((error) => {
        res.status(404).json({
            message: 'faild',
            error: error
        })
    })
})

mongoose.connect(process.env.URI).then(() => {
    console.log('CONNECT WITH MONGO_DB');
    app.listen(process.env.PORT)
})
