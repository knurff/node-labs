import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Videos} from "./Videos";
import Users from "./Users";


@Entity()
export class Comments {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Videos)
    video: Videos;

    @ManyToOne(() => Users)
    user: Users;

    @Column({ length: 200 })
    text: string;

    @CreateDateColumn()
    created_at: Date;
}
