import { getRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/UserEntity';
import {connection} from "../../data-source";

export class UserRepository {
    private userRepository: Repository<UserEntity>;

     constructor() {
        connection.then((_) => this.userRepository = getRepository(UserEntity));
    }

    async findById(id: string): Promise<UserEntity | null> {
        return this.userRepository.findOne({ where: { id } });
    }


    async findAllUsers(page: number, pageSize: number, age?: number, city?: string, postTitle?: string): Promise<UserEntity[]> {
        const query = this.userRepository.createQueryBuilder('user');

        if (age) {
            query.andWhere('user.age = :age', { age });
        }
        if (city) {
            query.andWhere('user.address.city = :city', { city });
        }
        if (postTitle) {
            query.innerJoin('user.posts', 'post')
                .andWhere('post.title = :postTitle', { postTitle });
        }

        query.skip((page - 1) * pageSize).take(pageSize);

        return query.getMany();
    }

    async create(user: UserEntity): Promise<UserEntity> {
        return this.userRepository.save(user);
    }

    async update(user: UserEntity): Promise<UserEntity> {
        return this.userRepository.save(user);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
    async findOne(statement: any): Promise<UserEntity | null> {
         return this.userRepository.findOne({where: statement})
    }
}
