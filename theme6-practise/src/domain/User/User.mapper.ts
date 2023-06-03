// UserMapper.ts


import {UserEntity} from "../../entities/UserEntity";
import User from "./User";
import {PostEntity} from "../../entities/PostEntity";

export default class UserMapper {

    static toDomain (userEntity: UserEntity): User {
        const {id, name, username, age, info, posts, email, address} = userEntity
        return new User({id, name, username, age, address, email, info, posts});
    }

    static toEntity (user: User): UserEntity {
        const userEntity = new UserEntity();
        const {id, name, username, age, address, email, info, posts} = user
        userEntity.id = id;
        userEntity.name = name;
        userEntity.username = username;
        userEntity.age = age;
        userEntity.address = address;
        userEntity.email = email;
        userEntity.info = info;
        userEntity.posts = <PostEntity[]>posts;
        return userEntity;
    }
}

