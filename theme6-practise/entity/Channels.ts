import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Users from "./Users";


@Entity()
export class Channels {
    id: string;
    @PrimaryGeneratedColumn('uuid')

    @ManyToOne(() => Users)
    user: Users;

    @Column({ length: 100 })
    description: string;

    @Column({ length: 80 })
    photo_url: string;

    @CreateDateColumn()
    created_at: Date;
}
