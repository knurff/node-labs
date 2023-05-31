import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 80 })
    email: string;

    @Column({ length: 20 })
    gender: string;

    @Column({ length: 80, nullable: true })
    avatar_url: string;
}
export default Users
