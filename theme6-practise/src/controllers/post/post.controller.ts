import PostService from "../../domain/Post/Post.service";
import {PostRepository} from "../../repository/PostRepository";
import {Post} from "../../domain/Post/Post";
import {Request, Response} from "express";

const postRepository = new PostRepository()
const postService = new PostService(postRepository);

export const createPost = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const { userId, title, text } = req.body as {userId: string, title: string, text: string};
        console.log(userId)

        const post = new Post({userId, text, title, id: undefined, dateCreation: new Date().toDateString()});

        const createdPost = await postService.createPost(post);

        return res.status(200).json({ post: createdPost });
    } catch (e) {
        return res.status(500).json(e);
    }
};
