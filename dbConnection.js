// import { mongoClient } from 'mongodb'

// const dbConnectionUrl = 'mongodb://127.0.0.1:27017'
// const client = new mongoClient(dbConnectionUrl)

// const dbConnection = async () => {
//     await client.connect();
//     const db = client.db("mongoDBProject_Database")
//     return db
// }

// export default dbConnection



import { MongoClient } from 'mongodb'

const dbConnectionUrl = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(dbConnectionUrl)

export const dbConnection = async () => {
    await client.connect()
    const db = client.db('mongoDBProject_Database')
    return db
}