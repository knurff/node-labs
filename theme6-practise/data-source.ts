import "reflect-metadata"
import {createConnection, DataSource} from "typeorm"
import {Channels} from "./entity/Channels";
import {Comments} from "./entity/Comments";
import {Likes} from "./entity/Likes";
import {Subscriptions} from "./entity/Subscriptions";
import {Videos} from "./entity/Videos";
import Users from "./entity/Users";


export const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Users, Channels, Comments, Likes, Subscriptions, Videos],
    migrations: [],
    subscribers: [],
});
