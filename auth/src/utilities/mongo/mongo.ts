import { MongoClient, Db } from 'mongodb'

const connectionString = process.env.MONGODB__URI;
const dbName = process.env.DB__NAME;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client: MongoClient;

const connectToDb = async (): Promise<Db> => {
    if (client) {
        console.log('connecting To DB')
        return client.db(dbName);
    }

    client = await MongoClient.connect(connectionString, options);;
    return client.db(dbName);
}

export default connectToDb;