import express, { Express } from 'express';
import dotenv from 'dotenv';
import router from "./routes/router";
import User from "./identities/User/User";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export const users: User[] = []

app.use('/', router)

app.listen(port, () => {
    console.log(`️Server starts on port: ${port}`);
});
