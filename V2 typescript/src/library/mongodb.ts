import { MongoClient } from "mongodb"

const uri: string | undefined = process.env.mongodb

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local")
}

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(uri)
        ;(global as any)._mongoClientPromise = client.connect()
    }
    clientPromise = (global as any)._mongoClientPromise
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri)
    clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
