import express from 'express'
import { dbConnection } from './dbConnection.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/read-user', (req, res) => {
    res.send("user here")
})

app.post('/add-user', async (req, res) => {
    const myDb = dbConnection()
    const studentCollection = (await myDb).collection('student')
    res.send("add user here")
})


app.listen(port, () => {
    console.log('express app run on port 3000');
})