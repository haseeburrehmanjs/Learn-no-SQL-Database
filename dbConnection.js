// import { mongoClient } from 'mongodb'

// const dbConnectionUrl = 'mongodb://127.0.0.1:27017'
// const client = new mongoClient(dbConnectionUrl)

// const dbConnection = async () => {
//     await client.connect();
//     const db = client.db("mongoDBProject_Database")
//     return db
// }

// export default dbConnection



import { MongoClient } from "mongodb"

const uri = "mongodb://127.0.0.1:27017"; // Change port to 27017

const client = new MongoClient(uri);

export const dbConnection = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

}

