
import { MongoClient } from "mongodb"

const dbConnectionUri = process.env.URI 
const client = new MongoClient(dbConnectionUri)

export const dbConnection = async () => {
    await client.connect()
    const db = client.db('mongodb_project_database')
    return db
}