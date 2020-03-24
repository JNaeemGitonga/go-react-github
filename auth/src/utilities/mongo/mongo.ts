import { MongoClient, Db } from 'mongodb'

const connectionString = process.env.MONGODB__URI;
const dbName = process.env.DB__NAME;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const _connectToDb = (): Promise<MongoClient> => {
    return MongoClient.connect(connectionString, options);
}

const initDb = async (): Promise<Db> => {
    const client = await _connectToDb();

    if (client) {
        return client.db(dbName);
    } else {
        Promise.reject(`couldn't connect to db: ${dbName}`);
    }
}

export default initDb;