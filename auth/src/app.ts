import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import router from './routes';
import connectToDb from './utilities/mongo/mongo';
import corsOptions from './utilities/corsOptions';

config();

const port = process.env.PORT || 9903;
const app = express();

(async (): Promise<void> => {
    const db = await connectToDb();
    if (!db) process.exit(1);
})();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(port, (): void => {
    console.log(`
        This is your working dir: ${__dirname})

        Grind hard on server port ${port}`
    );
  }
);
