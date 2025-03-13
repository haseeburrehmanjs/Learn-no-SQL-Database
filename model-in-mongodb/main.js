import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { userModal } from './models/user.model.js'
dotenv.config()

const app = express()
app.use(express.json())

app.post('/api/v1/user-insert', (req, res) => {
    const { name, email } = req.body
    const userData = new userModal({
        name: name,
        email: email
    })
    userData.save().then(() => {
        res.status(200).json({
            message : 'user added succesfully'
        })
    }).catch((error) => {
        res.status(404).json({
            message: 'fail',
            error: error
        })
    })
})

app.get('/api/v1/user-list', async (req, res) => {
    try{
        const users = await userModal.find(); // Wait for the query to resolve
        res.status(200).json(users); // Send the resolved data
    }catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
});


mongoose.connect(process.env.DB_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('EXPRESS APP RUN ON PORT 8000')
    })
})

