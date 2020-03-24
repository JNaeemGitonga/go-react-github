import { Db } from "mongodb";
import express from "express";
import { config } from "dotenv";
import loginRoute from "./routes/login/login";
import signupRoute from "./routes/signup/signup";
import initDb from "./utilities/mongo/mongo";
import bodyParser from "body-parser";
import cors from "cors";

config();

const port = process.env.PORT || 9903;
const app = express();

let db: Db;



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/auth/login", loginRoute);

app.use("/api/auth/signup", signupRoute);

app.listen(port, async (): Promise<void> => {
    console.log("This is your working dir: ", __dirname);
    console.log();
    console.log("Grind hard on server port " + port);

    if (!db) {
        db = await initDb();
    }
  }
);
