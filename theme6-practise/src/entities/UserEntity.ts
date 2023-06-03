import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ageT, cityT, emailT, idT, infoT, nameT, streetT, usernameT} from "../domain/User/User.types";
import {PostEntity} from "./PostEntity";

@Entity()
export class UserEntity  {
    @PrimaryGeneratedColumn('uuid')
    id: idT;
    @Column()
    age: ageT;
    @Column()
    email: emailT;
    @Column()
    info: infoT;
    @Column()
    name: nameT;
    @Column()
    username: usernameT;
    @OneToMany(() => PostEntity, post => post.user)
    posts: PostEntity[];
    @Column('jsonb')
    address: Record<string, cityT | streetT>;
}
