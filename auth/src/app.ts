import { Db } from "mongodb";
import express from "express";
import { config } from "dotenv";
import loginRoute from "./routes/login/login";
import signupRoute from "./routes/signup/signup";
import bodyParser from "body-parser";
import cors from "cors";
import connectToDb from './utilities/mongo/mongo';

config();

const port = process.env.PORT || 9903;
const app = express();


(async (): Promise<void> => {
    const db = await connectToDb()
    if (!db) process.exit(1);
})();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/auth/login", loginRoute);
app.use("/api/auth/signup", signupRoute);

app.listen(port, (): void => {
    console.log("This is your working dir: ", __dirname);
    console.log();
    console.log("Grind hard on server port " + port);
  }
);
