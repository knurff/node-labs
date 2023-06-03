import express, { Express } from 'express';
import dotenv from 'dotenv';
import router from "./routes/router";
import User from "./domain/User/User";
import bodyParser from "body-parser";
import connectToDB from "./helpers/connectToDB";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export const users: User[] = []

app.use('/', router)

const main = async () => {
    await connectToDB()
}

app.listen(port, () => {
    console.log(`️Server starts on port: ${port}`);
    main()
});
