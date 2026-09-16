import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (process.env.NODE_ENV === "development") {
    global._mongoClientPromise ??= new MongoClient(uri).connect();
    return global._mongoClientPromise;
  }

  return new MongoClient(uri).connect();
}

let clientPromise: Promise<MongoClient> | undefined;

export default function getMongoClient(): Promise<MongoClient> {
  clientPromise ??= createClientPromise();
  return clientPromise;
}
