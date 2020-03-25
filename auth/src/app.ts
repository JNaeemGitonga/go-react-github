import { Db } from 'mongodb';
import express from 'express';
import { config } from 'dotenv';
import loginRoute from './routes/login/login';
import signupRoute from './routes/signup/signup';
import initDb from './utilities/mongo/mongo';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Request, Response, NextFunction } from './utilities/request';

config();

const port = process.env.PORT || 9903;
const app = express();

let db: Db;
const connectToDb = async (next?: NextFunction): Promise<Db> => {
    if (!db) {
        try {
            db = await initDb();
            console.log(`You have successfully connected to ${db.databaseName}`)
        } catch (e) {
            console.log(`Unable to connect to Db: ${process.env.DB__NAME}`);
            console.error(e);
            next && next(e);
        }
    }
    return db;
}
connectToDb();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/auth/login', async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    req.db = await connectToDb(next);
    next();
}, loginRoute);

app.use('/api/auth/signup', async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    req.db = await connectToDb(next);
    next();
}, signupRoute);

app.listen(port, (): void => {
    console.log(`
        This is your working dir: ${__dirname}
        
        Grind hard on server port ${port}
    `);
  }
);
