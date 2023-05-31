import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Channels} from "./Channels";
@Entity()
export class Videos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Channels)
    channel: Channels;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 200, nullable: true })
    description: string;

    @Column({ length: 80 })
    preview_url: string;

    @Column({ length: 80 })
    file_url: string;

    @Column('bigint')
    duration: number;

    @CreateDateColumn()
    published_at: Date;
}
