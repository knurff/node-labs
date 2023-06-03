import express from "express";
import {createPost} from "../controllers/post/post.controller";

const router = express.Router()

router.post('/', createPost)

export default router
