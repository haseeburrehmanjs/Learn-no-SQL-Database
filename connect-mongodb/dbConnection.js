
import { MongoClient } from "mongodb"

const dbConnectionUri = 'mongodb+srv://haseeburrehmanjs:haseeburrehmanjs@cluster0.7euhc.mongodb.net/' 
const client = new MongoClient(dbConnectionUri)

export const dbConnection = async () => {
    await client.connect()
    const db = client.db('mongodb_project_database')
    return db
}