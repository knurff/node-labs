import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Channels} from "./Channels";
import Users from "./Users";

@Entity()
export class Subscriptions {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Channels)
    channel: Channels;

    @ManyToOne(() => Users)
    user: Users;

    @Column({ length: 50, default: 'standard' })
    level: string;

    @CreateDateColumn()
    subscribed_at: Date;
}
