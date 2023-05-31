import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {Videos} from "./Videos";
import Users from "./Users";



@Entity()
export class Likes {
    @PrimaryColumn()
    videoId: string;

    @PrimaryColumn()
    userId: string;

    @ManyToOne(() => Videos)
    video: Videos;

    @ManyToOne(() => Users)
    user: Users;

    @Column({ default: true })
    positive: boolean;

    @CreateDateColumn()
    created_at: Date;
}
