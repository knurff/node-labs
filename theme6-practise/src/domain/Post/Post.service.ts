import {Post} from "./Post";
import {PostMapper} from "./Post.mapper";
import {PostRepository} from "../../repository/PostRepository";


class PostService {
    private postRepository: PostRepository;

    constructor(postRepository: PostRepository) {
        this.postRepository = postRepository;
    }

    async createPost(post: Post): Promise<Post> {
        const postEntity = PostMapper.toEntity(post);
        console.log(post, '!!!!')
        const createdPostEntity = await this.postRepository.create(postEntity);
        console.log(createdPostEntity)
        return PostMapper.toDomain(createdPostEntity);

    }

}

export default PostService;
