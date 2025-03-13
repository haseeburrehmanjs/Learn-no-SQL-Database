import express from 'express'
import { dbConnection } from './dbConnection.js'

const app = express()
const port = 3000
app.use(express.json())

app.get('/student-read', (req, res) => {
    res.send('student read api')
})

app.post('/student-insert', async (req, res) => {
    // const myDb = await dbConnection()
    // const studentCollection = myDb.collection("student")
    res.status(200).json({
        bodyData : req.body
    })
})

app.listen(port, () => {
    console.log('Exprees app run on port 3000!')
})