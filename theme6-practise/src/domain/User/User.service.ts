// UserService.ts


import {UserRepository} from "../../repository/UserRepository";
import User from "./User";
import UserMapper from "./User.mapper";
import {UserEntity} from "../../entities/UserEntity";

class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async findById(id: string): Promise<User | null> {
        const userEntity = await this.userRepository.findById(id);
        if (!userEntity) return null;
        return UserMapper.toDomain(userEntity);
    }

    async findByUsername(username: string): Promise<UserEntity | null> {
        const userEntity = await this.userRepository.findOne({ username });
        return userEntity || null;
    }
    async create(user: User): Promise<User> {
        const userEntity = UserMapper.toEntity(user);
        const createdUserEntity = await this.userRepository.create(userEntity);
        return UserMapper.toDomain(createdUserEntity);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async update(user: User): Promise<User> {
        const userEntity = UserMapper.toEntity(user);
        const updatedUserEntity = await this.userRepository.update(userEntity);
        return UserMapper.toDomain(updatedUserEntity);
    }
    async findAllUsers(page: number, pageSize: number, age?: number, city?: string, postTitle?: string): Promise<User[]> {
        const userEntities = await this.userRepository.findAllUsers(page, pageSize, age, city, postTitle);
        return userEntities.map(UserMapper.toDomain);
    }

}

export default UserService;
