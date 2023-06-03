import { getRepository, Repository } from 'typeorm';
import { PostEntity } from '../entities/PostEntity';
import {connection} from "../../data-source";

export class PostRepository {
    private postRepository: Repository<PostEntity>;

    constructor() {
        connection.then((_) => this.postRepository = getRepository(PostEntity));
    }

    async create(post: PostEntity): Promise<PostEntity> {
        return this.postRepository.save(post);
    }

}
