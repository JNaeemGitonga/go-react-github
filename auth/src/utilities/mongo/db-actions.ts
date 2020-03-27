import { Db, InsertOneWriteOpResult } from 'mongodb';

export default class DbActions<T> {
    private db: Db;
    private collection: string;
    
    constructor(db: Db, collection: string) {
        this.db = db;
        this.collection = collection;
    }

    findAll(): Promise<T[]> {
        return this.db.collection(this.collection).find({}).toArray();
    }
    
    findOne(d: any): Promise<T> {
        return this.db.collection(this.collection).find(d).next();
    }

    insertOne(d: T): Promise<InsertOneWriteOpResult<any>> {
        return this.db.collection(this.collection).insertOne(d);
    }


}
