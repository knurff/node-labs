import {PostEntity} from "../../entities/PostEntity";
import {IPost} from "./Post.types";
import {Post} from "./Post";

export class PostMapper {
    static toDomain(entity: PostEntity): Post {
        const { id, title, text, dateCreation, userId } = entity;
        return new Post({ id, title, text, dateCreation, userId });
    }

    static toEntity (domain: IPost): PostEntity {
        const entity = new PostEntity();
        entity.id = domain.id;
        entity.title = domain.title;
        entity.text = domain.text;
        entity.dateCreation = domain.dateCreation
        entity.userId = domain.userId
        return entity;
    }
}
